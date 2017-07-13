import Component, { tracked } from '@glimmer/component';
import Navigo from 'navigo';
import { setItem, getItem } from '../../../utils/session-storage';

declare const $, Diff2HtmlUI;

const router = new Navigo(null, true);

export default class EmberCliDiff extends Component {
  @tracked
  from: any;
  @tracked
  to: any;
  @tracked
  downloadDiffUrl: any;

  constructor(options) {
    super(options);

    router
    .on({
      '/:from/:to': (params, query) => {
        this.from = params.from;
        this.to = params.to;
      },
    })
    .resolve();
  }

  createHashForSelect2(versions) {
    return versions.map(function(version) {
      return { id: version, text: version };
    });
  }

  didInsertElement() {
    this.loadTags().then((tags) => {
      $("select").select2({
        data: this.createHashForSelect2(tags)
      });

      $("#from").val(this.from).trigger("change")
      $("#to").val(this.to).trigger("change")

      if (this.from && this.to) {
        this.loadDiff();
      }
    });
  }

  loadTags() {
    return new Promise((resolve) => {
      var tags = getItem('tags');

      if (tags) {
        resolve(tags);
      } else {
        fetch(`https://api.github.com/repos/ember-cli/ember-new-output/tags?per_page=100`)
          .then(request => request.json())
          .then((tags) => {
            let versionTags = tags.map((tag) => {
              return tag.name;
            });

            setItem('tags', versionTags);

            resolve(versionTags);
          });
      }
    });
  }

  loadVersion(key, e) {
    this[key] = e.target.value;

    if (key === "from") {
      this.loadTags().then((tags) => {
        let greaterThanFromVersion = tags.slice(0, tags.indexOf(this.from));

        $("#to").empty().prepend('<option value="">').select2({
          data: this.createHashForSelect2(greaterThanFromVersion)
        })
      });
    }
  }

  load(e) {
    if (this.from && this.to) {
      router.navigate(`/${this.from}/${this.to}`);
      this.loadDiff();
    }
  }

  loadDiff() {
    fetch(`https://api.github.com/repos/ember-cli/ember-new-output/compare/${this.from}...${this.to}`, {
      headers: new Headers({"Accept": "application/vnd.github.v3.diff"})
    })
    .then(request => request.text())
    .then((text) => {
      if (text) {
        this.downloadDiffUrl = `https://github.com/ember-cli/ember-new-output/compare/${this.from}...${this.to}.diff`;
        var diff2htmlUi = new Diff2HtmlUI({diff: text});
        diff2htmlUi.draw('#diff', {inputFormat: 'diff', showFiles: false, matching: 'lines'});
      } else {
        this.downloadDiffUrl = null;
        $("#diff").html("No changes");
      }
    });
  }
}
