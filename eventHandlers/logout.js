import {
  retrieveJwtFromStorage,
  removeJwtFromLocalStorage,
} from "../data/storage.js";

export function logout() {
  let jwtToken = retrieveJwtFromStorage();
  jwtToken = null;
  removeJwtFromLocalStorage();
  console.log("Logged out");
  alert("Logged out successfully!");
}
