import { transData } from "../data/data.js";
import { summaryEl } from "../queries/domQueries.js";
import { createElement } from "./helperFunctions.js";

const totalXps = transData.xpTransactionData.reduce((a, b) => a + b.amount, 0);

const totalAmountOfGoSkills = transData.golangTransactionData.reduce(
  (a, b) => a + b.amount,
  0
);

const totalAmountOfJSSkills = transData.javaScriptTransactionData.reduce(
  (a, b) => a + b.amount,
  0
);

export function createSummary() {
  const totalXpsEl = createElement(
    `<strong>Total Xps</strong> : ${totalXps}`,
    "p"
  );

  const totalAmountOfGoSkillsEl = createElement(
    `<strong>Total Amount of Go skills</strong> : ${totalAmountOfGoSkills}`,
    "p"
  );

  const totalAmountOfJSSkillsEl = createElement(
    `<strong>Total Amount of JS skills</strong> : ${totalAmountOfJSSkills}`,
    "p"
  );

  summaryEl.append(
    totalXpsEl,
    totalAmountOfGoSkillsEl,
    totalAmountOfJSSkillsEl
  );
}
