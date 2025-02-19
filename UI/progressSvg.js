import { svgContainer } from "../queries/domQueries.js";

export function createCircleGraph(data) {
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
