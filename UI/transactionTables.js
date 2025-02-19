import { transactionsTableHeaders, userData } from "../data/data.js";
import { svgContainer, transTable } from "../queries/domQueries.js";

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

export function createElement(content, tag) {
  const element = document.createElement(tag);
  element.innerHTML = content;
  return element;
}

export function createAndAppendToElement(elements, tag) {
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
  const tableCeils = transactionsTableHeaders.map(createTableHeadCeils);
  const tHeader = createAndAppendToElement(tableCeils, "thead");
  return tHeader;
}

export function createTransactonTable(transData, captionString, table) {
  const caption = createElement(captionString, "caption");
  const tHeader = createTableHeader();
  const transactionList = transData.map(createTableCeils);
  const tBody = createAndAppendToElement(transactionList, "tbody");
  table.append(caption, tHeader, tBody);
  createLineGraph(transData);
}

function createLineGraph(data) {
  svgContainer.innerHTML = "";
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "500");
  svg.setAttribute("height", "200");
  svg.setAttribute("viewBox", "0 0 500 200");

  const maxAmount = Math.max(...data.map((d) => d.amount));
  const scaleX = 500 / data.length;
  const scaleY = 200 / maxAmount;

  let pathData = "M";
  data.forEach((d, i) => {
    const x = i * scaleX;
    const y = 200 - d.amount * scaleY;
    pathData += `${x},${y} `;
  });

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", pathData.trim());
  path.setAttribute("stroke", "blue");
  path.setAttribute("fill", "none");

  svg.appendChild(path);
  svgContainer.appendChild(svg);
}

export function javaScriptTransactionTable() {
  transTable.innerHTML = "";
  createTransactonTable(
    javaScriptTransactionData,
    "Your Transaction in JavaScript",
    transTable
  );
}

export function xpTransactionTable() {
  transTable.innerHTML = "";
  createTransactonTable(xpTransactionData, "Your XPs transaction", transTable);
}

export function golangTransactionTable() {
  transTable.innerHTML = "";
  createTransactonTable(
    golangTransactionData,
    "Your transactions in Golang",
    transTable
  );
}
