import { progressTableHeaders, userData } from "../data/data.js";
import { svgContainer, transTable } from "../queries/domQueries.js";
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

function createCircleGraph(data) {
  svgContainer.innerHTML = "";
  const total = data.length;
  const passCount = data.filter((d) => d.grade >= 1).length;
  const failCount = total - passCount;
  const passPercentage = (passCount / total) * 100;
  const failPercentage = (failCount / total) * 100;

  const svgNamespace = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNamespace, "svg");
  svg.setAttribute("width", "200");
  svg.setAttribute("height", "200");
  svg.setAttribute("viewBox", "0 0 32 32");

  const passCircle = document.createElementNS(svgNamespace, "circle");
  passCircle.setAttribute("r", "16");
  passCircle.setAttribute("cx", "16");
  passCircle.setAttribute("cy", "16");
  passCircle.setAttribute("fill", "transparent");
  passCircle.setAttribute("stroke", "green");
  passCircle.setAttribute("stroke-width", "32");
  passCircle.setAttribute(
    "stroke-dasharray",
    `${passPercentage} ${100 - passPercentage}`
  );

  const failCircle = document.createElementNS(svgNamespace, "circle");
  failCircle.setAttribute("r", "16");
  failCircle.setAttribute("cx", "16");
  failCircle.setAttribute("cy", "16");
  failCircle.setAttribute("fill", "transparent");
  failCircle.setAttribute("stroke", "red");
  failCircle.setAttribute("stroke-width", "32");
  failCircle.setAttribute(
    "stroke-dasharray",
    `${failPercentage} ${100 - failPercentage}`
  );
  failCircle.setAttribute("transform", "rotate(-90 16 16)");

  svg.appendChild(failCircle);
  svg.appendChild(passCircle);
  svgContainer.append(svg);
}

export function createProgressTable() {
  transTable.innerHTML = "";
  const caption = createElement("Your grade per project", "caption");
  const tHeader = createProgressTableHeader();
  const progressList = validProgressData.map(createProgressTableCeils);
  const tBody = createAndAppendToElement(progressList, "tbody");
  transTable.append(caption, tHeader, tBody);
  createCircleGraph(validProgressData);
}
