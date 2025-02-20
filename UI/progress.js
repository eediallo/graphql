import { getValideProgressData, progressTableHeaders } from "../data/data.js";
import { transTable } from "../queries/domQueries.js";
import { createElement, createAndAppendToElement } from "./helperFunctions.js";
import { createCircleGraph } from "./progressSvg.js";

export function createProgressTableCeils(data) {
  const project = data.path.split("/").at(-1);
  const projectId = createElement(data.id, "td");
  const projectName = createElement(project, "td");
  const projectGrade = createElement(data.grade.toFixed(2), "td");
  const status = data.grade >= 1 ? "Pass" : "Fail";
  const statusEl = createElement(status, "td");
  const projectTr = createAndAppendToElement(
    [projectId, projectName, projectGrade, statusEl],
    "tr"
  );
  return projectTr;
}

export function createProgressTableHeadCeils(data) {
  const projectId = createElement(data.id, "th");
  const projectName = createElement(data.project, "th");
  const projectGrade = createElement(data.grade, "th");
  const status = createElement(data.status, "th");
  const projectTr = createAndAppendToElement(
    [projectId, projectName, projectGrade, status],
    "tr"
  );
  return projectTr;
}

export function createProgressTableHeader() {
  const tableCeils = progressTableHeaders.map(createProgressTableHeadCeils);
  const tHeader = createAndAppendToElement(tableCeils, "thead");
  return tHeader;
}

export async function createProgressTable() {
  const validProgressData = await getValideProgressData();
  transTable.innerHTML = "";
  const caption = createElement("Grade Per Project Table", "caption");
  const tHeader = createProgressTableHeader();
  const progressList = validProgressData.map(createProgressTableCeils);
  const tBody = createAndAppendToElement(progressList, "tbody");
  transTable.append(caption, tHeader, tBody);
  createCircleGraph(validProgressData);
}
