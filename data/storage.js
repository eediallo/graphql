export function getData(key) {
  return localStorage.getItem(key) || null;
}

export function saveJwtToLocalStorage(jwtToken) {
  localStorage.setItem("jwt", jwtToken);
}

export function setUserData(userId, data) {
  localStorage.setItem(userId, JSON.stringify(data));
}

export function removeItem(key) {
  localStorage.removeItem(key);
}
