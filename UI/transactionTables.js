import { userData } from "../data/data.js";
import { transTable } from "../queries/domQueries.js";
import { createTable } from "./helperFunctions.js";

const transactionData = userData[1].data.transaction;
const golangTransactionData = transactionData.filter(
  (trans) => trans.type === "skill_go"
);

const javaScriptTransactionData = transactionData.filter(
  (trans) => trans.type === "skill_js"
);

const xpTransactionData = transactionData.filter(
  (trans) => trans.type === "xp"
);

export function javaScriptTransactionTable() {
  transTable.innerHTML = "";
  createTable(
    javaScriptTransactionData,
    "Your Transaction in JavaScript",
    transTable
  );
}

export function xpTransactionTable() {
  transTable.innerHTML = "";
  createTable(xpTransactionData, "Your XPs transaction", transTable);
}

export function golangTransactionTable() {
  transTable.innerHTML = "";
  createTable(golangTransactionData, "Your transactions in Golang", transTable);
}
