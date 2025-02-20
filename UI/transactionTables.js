import {
  getGoTransactionData,
  getJSTransactionData,
  getXPsTransactionData,
} from "../data/data.js";
import { transTable } from "../queries/domQueries.js";
import { createTable } from "./helperFunctions.js";

export async function javaScriptTransactionTable() {
  transTable.innerHTML = "";
  createTable(
    await getJSTransactionData(),
    "JavaScript Transaction Table",
    transTable
  );
}

export async function xpTransactionTable() {
  transTable.innerHTML = "";
  createTable(
    await getXPsTransactionData(),
    "XPs Transaction Table",
    transTable
  );
}

export async function golangTransactionTable() {
  transTable.innerHTML = "";
  createTable(
    await getGoTransactionData(),
    "Golang Transaction Table",
    transTable
  );
}
