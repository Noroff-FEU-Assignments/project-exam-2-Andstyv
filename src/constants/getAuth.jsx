const authKey = "auth";

function getFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }
  return JSON.parse(value);
}

export function getAuth() {
  return getFromStorage(authKey);
}
