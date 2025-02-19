import { transactionsTableHeaders } from "../data/data.js";
import { createBarGraph } from "./transSvg.js";

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

export function createTableHeadCeils(data) {
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

export function createTableHeader() {
  const tableCeils = transactionsTableHeaders.map(createTableHeadCeils);
  const tHeader = createAndAppendToElement(tableCeils, "thead");
  return tHeader;
}

export function createTable(transData, captionString, table) {
  const caption = createElement(captionString, "caption");
  const tHeader = createTableHeader();
  const transactionList = transData.map(createTableCeils);
  const tBody = createAndAppendToElement(transactionList, "tbody");
  table.append(caption, tHeader, tBody);
  createBarGraph(transData);
}
