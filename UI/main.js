import { getUserId } from "../data/getUserId.js";
import { getData } from "../data/storage.js";
import { renderTransTables } from "./transactionTables.js";
import { displayFirstName } from "./displayFirstName.js";

function main() {
  renderTransTables();
  const userId = getUserId();
  const userData = getData(userId);
  console.log(userData, "<====user DATA====");
  for (const { attrs, campus } of userData.data.user) {
    displayFirstName(attrs.firstName);
  }
}

window.onload = main;
