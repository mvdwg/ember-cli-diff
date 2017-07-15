export function getItem(key) {
  try {
    const value = sessionStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }
  } catch(e) {
    // Somthing went wrong with SessionStorage or JSON.parse :-(
  }
}

export function setItem(key, value) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch(e) {
    // Somthing went wrong with SessionStorage or JSON.stringify :-(
  }
}
