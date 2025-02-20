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
    "Your Transaction in JavaScript",
    transTable
  );
}

export async function xpTransactionTable() {
  transTable.innerHTML = "";
  createTable(
    await getXPsTransactionData(),
    "Your XPs transaction",
    transTable
  );
}

export async function golangTransactionTable() {
  transTable.innerHTML = "";
  createTable(
    await getGoTransactionData(),
    "Your transactions in Golang",
    transTable
  );
}
