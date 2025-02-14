export function retrieveJwtFromStorage() {
  return localStorage.getItem("jwt") || null;
}

export function saveJwtToLocalStorage(jwtToken) {
  localStorage.setItem("jwt", jwtToken);
}

export function removeJwtFromLocalStorage() {
  localStorage.removeItem("jwt");
}
