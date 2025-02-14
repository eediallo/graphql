export function retrieveJwtFromStorage() {
  return localStorage.getItem("jwt") || null;
}

export function saveJwtToLocalStorage(jwtToken) {
  localStorage.setItem("jwt", jwtToken);
}

export function setUserData(userId, data) {
  localStorage.setItem(userId, JSON.stringify(data));
}

export function removeJwtFromLocalStorage() {
  localStorage.removeItem("jwt");
}
