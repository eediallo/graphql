import { renderTransTables } from "./transactionTables.js";
import { createUserProfile, displayFirstName } from "./userProfile.js";

function main() {
  createUserProfile();
  displayFirstName();
  renderTransTables();
}

window.onload = main;
