const data = [
  {
    id: 13,
    type: "Golang",
    amount: 35,
    CreatedAt: 2025,
    path: "www.example.com",
  },
];

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
  const tdansactionList = data.map(createTableCeils);
  document.body.append(...tdansactionList);
}
