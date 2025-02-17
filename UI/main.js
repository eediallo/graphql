import { renderTransTables } from "./transactionTables.js";
import { displayFirstName } from "./userProfile.js";

function main() {
  displayFirstName();
  renderTransTables();
}

window.onload = main;
