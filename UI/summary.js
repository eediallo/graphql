import {
  getGoTransactionData,
  getJSTransactionData,
  getValideProgressData,
  getXPsTransactionData,
} from "../data/data.js";
import { summaryEl } from "../queries/domQueries.js";
import { createElement } from "./helperFunctions.js";

export async function createSummary() {
  const xpsData = await getXPsTransactionData();
  const totalAmountOfXps = xpsData.reduce((a, b) => a + b.amount, 0);

  const goSkillsData = await getGoTransactionData();
  const totalAmountOfGoSkills = goSkillsData.reduce((a, b) => a + b.amount, 0);

  const jsSkillsData = await getJSTransactionData();
  const totalAmountOfJSSkills = jsSkillsData.reduce((a, b) => a + b.amount, 0);

  const validProgressData = await getValideProgressData();
  const totalGrade = validProgressData.reduce((a, b) => a + b.grade, 0);

  const successRate =
    (validProgressData
      .filter((p) => p.grade >= 1)
      .reduce((a, b) => a + b.grade, 0) *
      100) /
    totalGrade;

  const failureRate =
    (validProgressData
      .filter((p) => p.grade < 1)
      .reduce((a, b) => a + b.grade, 0) *
      100) /
    totalGrade;

  const totalAmountOfXpsEl = createElement(
    `<strong>Total Xps</strong> : ${totalAmountOfXps}`,
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

  const successRateEl = createElement(
    `<strong>Success | Failure rates</strong> : <span id="success-rate">${Math.round(
      successRate
    )}%</span> | <span id="failure-rate">${Math.round(failureRate)}%</span>`,
    "p"
  );

  summaryEl.append(
    totalAmountOfXpsEl,
    totalAmountOfGoSkillsEl,
    totalAmountOfJSSkillsEl,
    successRateEl
  );
}
