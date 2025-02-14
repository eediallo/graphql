import { removeItem, getData } from "../data/storage.js";

export function logout() {
  let jwtToken = getData("jwt");
  jwtToken = null;
  removeItem("jwt");
  console.log("Logged out");
  alert("Logged out successfully!");
}
