import { getUserId } from "../data/getUserId.js";
import { getData } from "../data/storage.js";

function main() {
  const userId = getUserId();
  const userData = getData(userId);
}

window.onload = main;
