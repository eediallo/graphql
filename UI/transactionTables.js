import { transData } from "../data/data.js";
import { transTable } from "../queries/domQueries.js";
import { createTable } from "./helperFunctions.js";

export function javaScriptTransactionTable() {
  transTable.innerHTML = "";
  createTable(
    transData.javaScriptTransactionData,
    "Your Transaction in JavaScript",
    transTable
  );
}

export function xpTransactionTable() {
  transTable.innerHTML = "";
  createTable(transData.xpTransactionData, "Your XPs transaction", transTable);
}

export function golangTransactionTable() {
  transTable.innerHTML = "";
  createTable(
    transData.golangTransactionData,
    "Your transactions in Golang",
    transTable
  );
}
