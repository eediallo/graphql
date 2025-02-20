import {
  getGoTransactionData,
  getJSTransactionData,
  getValideProgressData,
  getXPsTransactionData,
} from "../data/data.js";
import { summaryEl } from "../queries/domQueries.js";
import { createElement } from "./helperFunctions.js";
import { calculatePassFailPercentages } from "./progressSvg.js";

export async function createSummary() {
  const xpsData = await getXPsTransactionData();
  const totalAmountOfXps = xpsData.reduce((a, b) => a + b.amount, 0);

  const goSkillsData = await getGoTransactionData();
  const totalAmountOfGoSkills = goSkillsData.reduce((a, b) => a + b.amount, 0);

  const jsSkillsData = await getJSTransactionData();
  const totalAmountOfJSSkills = jsSkillsData.reduce((a, b) => a + b.amount, 0);

  const validProgressData = await getValideProgressData();

  const { passPercentage, failPercentage } =
    calculatePassFailPercentages(validProgressData);

  const totalAmountOfXpsEl = createElement(
    `<strong>Total amount of XPs</strong> : ${totalAmountOfXps}`,
    "p"
  );

  const totalAmountOfGoSkillsEl = createElement(
    `<strong>Total amount of Go skills</strong> : ${totalAmountOfGoSkills}`,
    "p"
  );

  const totalAmountOfJSSkillsEl = createElement(
    `<strong>Total amount of JS skills</strong> : ${totalAmountOfJSSkills}`,
    "p"
  );

  const successRateEl = createElement(
    `<strong>Success | Failure rates</strong> : <span id="success-rate">${Math.round(
      passPercentage
    )}%</span> | <span id="failure-rate">${Math.round(failPercentage)}%</span>`,
    "p"
  );

  summaryEl.append(
    totalAmountOfXpsEl,
    totalAmountOfGoSkillsEl,
    totalAmountOfJSSkillsEl,
    successRateEl
  );
}
