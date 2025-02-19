import { progressTableHeaders, userData } from "../data/data.js";
import { transTable } from "../queries/domQueries.js";
import { createBarGraph } from "./transSvg.js";
import { createElement, createAndAppendToElement } from "./helperFunctions.js";

const progressData = userData[2].data.progress;
export const validProgressData = progressData.filter(
  (progress) => progress.grade !== null
);

export function createProgressTableCeils(data) {
  const project = data.path.split("/").at(-1);
  const projectId = createElement(data.id, "td");
  const projectName = createElement(project, "td");
  const projectGrade = createElement(data.grade, "td");
  const projectTr = createAndAppendToElement(
    [projectId, projectName, projectGrade],
    "tr"
  );
  return projectTr;
}

export function createProgressTableHeadCeils(data) {
  const projectId = createElement(data.id, "th");
  const projectName = createElement(data.project, "th");
  const projectGrade = createElement(data.grade, "th");
  const projectTr = createAndAppendToElement(
    [projectId, projectName, projectGrade],
    "tr"
  );
  return projectTr;
}

export function createProgressTableHeader() {
  const tableCeils = progressTableHeaders.map(createProgressTableHeadCeils);
  const tHeader = createAndAppendToElement(tableCeils, "thead");
  return tHeader;
}

export function createProgressTable() {
  const caption = createElement("Your grade per project", "caption");
  const tHeader = createProgressTableHeader();
  const progressList = validProgressData.map(createProgressTableCeils);
  const tBody = createAndAppendToElement(progressList, "tbody");
  transTable.append(caption, tHeader, tBody);
  createBarGraph(validProgressData);
}
