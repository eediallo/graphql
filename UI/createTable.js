import { getUserId } from "../data/getUserId.js";
import { getData } from "../data/storage.js";


const userId = getUserId();
const userData = getData(userId);

const transactionData = userData[1].data.transaction;
console.log(transactionData, "transaction");

function createElement(content, tag) {
  const element = document.createElement(tag);
  element.textContent = content;
  return element;
}

function createAndToElement(elements, tag) {
  const element = document.createElement(tag);
  element.append(...elements);
  return element;
}
export function createTableCeils(data) {
  const transId = createElement(data.id, "td");
  const transType = createElement(data.type, "td");
  const transAmount = createElement(data.amount, "td");
  const transCreatedAt = createElement(data.createdAt, "td");
  const transPath = createElement(data.path, "td");
  const transTr = createAndToElement(
    [transId, transType, transAmount, transCreatedAt, transPath],
    "tr"
  );
  return transTr;
}

export function createTableRow() {
  const tdansactionList = transactionData.map(createTableCeils);
  document.body.append(...tdansactionList);
}
