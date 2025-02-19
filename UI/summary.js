import { transData } from "../data/data.js";
import { summaryEl } from "../queries/domQueries.js";
import { createElement } from "./helperFunctions.js";

const totalXps = transData.xpTransactionData.reduce(
  (a, b) => a + Number(b.amount),
  0
);

const totalAmountOfGoSkills = transData.golangTransactionData.reduce(
  (a, b) => a + Number(b.amount),
  0
);

console.log(totalXps, "<total exps");
export function createSummary() {
  const totalXpsEl = createElement(
    `<strong>Total Xps</strong> : ${totalXps}`,
    "p"
  );

  const totalAmountOfGoSkillsEl = createElement(
    `<strong>Total Amount of Go skills</strong> : ${totalAmountOfGoSkills}`,
    "p"
  );

  summaryEl.append(totalXpsEl, totalAmountOfGoSkillsEl);
}
