import Component, { tracked } from '@glimmer/component';

export default class EmberCliDiff extends Component {
  from: any;
  to: any;

  didInsertElement() {
    var json = [{"id":"v2.14.0-beta.2","text":"v2.14.0-beta.2"},{"id":"v2.14.0-beta.1","text":"v2.14.0-beta.1"},{"id":"v2.13.2","text":"v2.13.2"},{"id":"v2.13.1","text":"v2.13.1"},{"id":"v2.13.0","text":"v2.13.0"},{"id":"v2.13.0-beta.4","text":"v2.13.0-beta.4"},{"id":"v2.13.0-beta.3","text":"v2.13.0-beta.3"},{"id":"v2.13.0-beta.2","text":"v2.13.0-beta.2"},{"id":"v2.13.0-beta.1","text":"v2.13.0-beta.1"},{"id":"v2.12.3","text":"v2.12.3"},{"id":"v2.12.2","text":"v2.12.2"},{"id":"v2.12.1","text":"v2.12.1"},{"id":"v2.12.0","text":"v2.12.0"},{"id":"v2.12.0-beta.2","text":"v2.12.0-beta.2"},{"id":"v2.12.0-beta.1","text":"v2.12.0-beta.1"},{"id":"v2.11.1","text":"v2.11.1"},{"id":"v2.11.0","text":"v2.11.0"},{"id":"v2.11.0-beta.2","text":"v2.11.0-beta.2"},{"id":"v2.11.0-beta.1","text":"v2.11.0-beta.1"},{"id":"v2.10.1","text":"v2.10.1"},{"id":"v2.10.0","text":"v2.10.0"},{"id":"v2.10.0-beta.2","text":"v2.10.0-beta.2"},{"id":"v2.10.0-beta.1","text":"v2.10.0-beta.1"},{"id":"v2.9.1","text":"v2.9.1"},{"id":"v2.9.0","text":"v2.9.0"},{"id":"v2.9.0-beta.2","text":"v2.9.0-beta.2"},{"id":"v2.9.0-beta.1","text":"v2.9.0-beta.1"},{"id":"v2.8.0","text":"v2.8.0"},{"id":"v2.8.0-beta.3","text":"v2.8.0-beta.3"},{"id":"v2.8.0-beta.2","text":"v2.8.0-beta.2"},{"id":"v2.8.0-beta.1","text":"v2.8.0-beta.1"},{"id":"v2.7.0","text":"v2.7.0"},{"id":"v2.7.0-beta.6","text":"v2.7.0-beta.6"},{"id":"v2.7.0-beta.5","text":"v2.7.0-beta.5"},{"id":"v2.7.0-beta.4","text":"v2.7.0-beta.4"},{"id":"v2.7.0-beta.3","text":"v2.7.0-beta.3"},{"id":"v2.7.0-beta.2","text":"v2.7.0-beta.2"},{"id":"v2.7.0-beta.1","text":"v2.7.0-beta.1"},{"id":"v2.6.3","text":"v2.6.3"},{"id":"v2.6.2","text":"v2.6.2"},{"id":"v2.6.1","text":"v2.6.1"},{"id":"v2.6.0","text":"v2.6.0"},{"id":"v2.6.0-beta.3","text":"v2.6.0-beta.3"},{"id":"v2.6.0-beta.2","text":"v2.6.0-beta.2"},{"id":"v2.6.0-beta.1","text":"v2.6.0-beta.1"},{"id":"v2.5.1","text":"v2.5.1"},{"id":"v2.5.0","text":"v2.5.0"},{"id":"v2.4.3","text":"v2.4.3"},{"id":"v2.4.2","text":"v2.4.2"},{"id":"v2.4.1","text":"v2.4.1"},{"id":"v2.4.0","text":"v2.4.0"},{"id":"v2.3.0","text":"v2.3.0"},{"id":"v2.3.0-beta.2","text":"v2.3.0-beta.2"},{"id":"v2.3.0-beta.1","text":"v2.3.0-beta.1"},{"id":"v2.2.0-beta.6","text":"v2.2.0-beta.6"},{"id":"v2.2.0-beta.5","text":"v2.2.0-beta.5"},{"id":"v2.2.0-beta.4","text":"v2.2.0-beta.4"},{"id":"v2.2.0-beta.3","text":"v2.2.0-beta.3"},{"id":"v2.2.0-beta.2","text":"v2.2.0-beta.2"},{"id":"v2.2.0-beta.1","text":"v2.2.0-beta.1"},{"id":"v1.13.15","text":"v1.13.15"},{"id":"v1.13.14","text":"v1.13.14"},{"id":"v1.13.13","text":"v1.13.13"},{"id":"v1.13.12","text":"v1.13.12"},{"id":"v1.13.11","text":"v1.13.11"},{"id":"v1.13.10","text":"v1.13.10"},{"id":"v1.13.8","text":"v1.13.8"},{"id":"v1.13.7","text":"v1.13.7"},{"id":"v1.13.6","text":"v1.13.6"},{"id":"v1.13.5","text":"v1.13.5"},{"id":"v1.13.1","text":"v1.13.1"},{"id":"v1.13.0","text":"v1.13.0"},{"id":"v0.2.7","text":"v0.2.7"},{"id":"v0.2.6","text":"v0.2.6"},{"id":"v0.2.5","text":"v0.2.5"},{"id":"v0.2.4","text":"v0.2.4"},{"id":"v0.2.3","text":"v0.2.3"},{"id":"v0.2.2","text":"v0.2.2"},{"id":"v0.2.1","text":"v0.2.1"},{"id":"v0.2.0","text":"v0.2.0"},{"id":"v0.2.0-beta.1","text":"v0.2.0-beta.1"},{"id":"v0.1.15","text":"v0.1.15"},{"id":"v0.1.14","text":"v0.1.14"},{"id":"v0.1.13","text":"v0.1.13"},{"id":"v0.1.12","text":"v0.1.12"},{"id":"v0.1.11","text":"v0.1.11"},{"id":"v0.1.10","text":"v0.1.10"},{"id":"v0.1.9","text":"v0.1.9"},{"id":"v0.1.8","text":"v0.1.8"},{"id":"v0.1.7","text":"v0.1.7"},{"id":"v0.1.6","text":"v0.1.6"},{"id":"v0.1.5","text":"v0.1.5"},{"id":"v0.1.4","text":"v0.1.4"},{"id":"v0.1.3","text":"v0.1.3"},{"id":"v0.1.2","text":"v0.1.2"},{"id":"v0.1.1","text":"v0.1.1"},{"id":"v0.1.0","text":"v0.1.0"},{"id":"v0.0.47","text":"v0.0.47"},{"id":"v0.0.46","text":"v0.0.46"},{"id":"v0.0.45","text":"v0.0.45"}];

    $("select").select2({
      data: json
    });
  }

  loadFrom(e) {
    this.from = e.target.value;
  }

  loadTo(e) {
    this.to = e.target.value;
  }

  loadDiff(e) {
    e.preventDefault();

    fetch(`https://api.github.com/repos/ember-cli/ember-new-output/compare/${this.from}...${this.to}`, {
      headers: new Headers({"Accept": "application/vnd.github.v3.diff"})
    })
      .then(request => request.text())
      .then((text) => {
        var diff2htmlUi = new Diff2HtmlUI({diff: text});
        diff2htmlUi.draw('#diff', {inputFormat: 'diff', showFiles: false, matching: 'lines'});
      )};
  }
}
