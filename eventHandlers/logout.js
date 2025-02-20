import { removeItem, getData } from "../data/storage.js";
import { redirectToPage } from "../redirect.js";

export function logout() {
  let jwtToken = getData("jwt");
  jwtToken = null;
  removeItem("jwt");
  redirectToPage("index.html");
}
