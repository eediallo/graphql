import { getUserId } from "../data/getUserId.js";
import { getData } from "../data/storage.js";

const tableHeaders = [
  {
    id: "ID",
    type: "Type",
    amount: "Amount",
    campus: "Campus",
    path: "Path",
  },
];

const userId = getUserId();
const userData = getData(userId);

const transactionData = userData[1].data.transaction;
console.log(transactionData, "transaction");

function createElement(content, tag) {
  const element = document.createElement(tag);
  element.textContent = content;
  return element;
}

function createAndAppendToElement(elements, tag) {
  const element = document.createElement(tag);
  element.append(...elements);
  return element;
}
export function createTableCeils(data) {
  const transId = createElement(data.id, "td");
  const transType = createElement(data.type, "td");
  const transAmount = createElement(data.amount, "td");
  const transCampus = createElement(data.campus, "td");
  const transPath = createElement(data.path, "td");
  const transTr = createAndAppendToElement(
    [transId, transType, transAmount, transCampus, transPath],
    "tr"
  );
  return transTr;
}

function createTableHeadCeils(data) {
  const transId = createElement(data.id, "th");
  const transType = createElement(data.type, "th");
  const transAmount = createElement(data.amount, "th");
  const transCampus = createElement(data.campus, "th");
  const transPath = createElement(data.path, "th");
  const transTr = createAndAppendToElement(
    [transId, transType, transAmount, transCampus, transPath],
    "tr"
  );

  return transTr;
}

function createTableHeader() {
  const tableCeils = tableHeaders.map(createTableHeadCeils);
  const tHeader = createAndAppendToElement(tableCeils, "thead");
  return tHeader;
}

export function createTableRow() {
  const tHeader = createTableHeader();
  const transactionList = transactionData.map(createTableCeils);
  const tBody = createAndAppendToElement(transactionList, "tbody");
  document.querySelector("#transaction-table").append(tHeader, tBody);
}
