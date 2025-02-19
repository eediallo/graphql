import { svgContainer } from "../queries/domQueries.js";

export function createLineGraph(data) {
  svgContainer.innerHTML = "";
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "500");
  svg.setAttribute("height", "200");
  svg.setAttribute("viewBox", "0 0 500 200");

  const maxAmount = Math.max(...data.map((d) => d.amount));
  const scaleX = 500 / data.length;
  const scaleY = 200 / maxAmount;

  let pathData = "M";
  data.forEach((d, i) => {
    const x = i * scaleX;
    const y = 200 - d.amount * scaleY;
    pathData += `${x},${y} `;
  });

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", pathData.trim());
  path.setAttribute("stroke", "blue");
  path.setAttribute("fill", "none");

  // Create x-axis
  const xAxis = document.createElementNS(svgNS, "line");
  xAxis.setAttribute("x1", "0");
  xAxis.setAttribute("y1", "200");
  xAxis.setAttribute("x2", "500");
  xAxis.setAttribute("y2", "200");
  xAxis.setAttribute("stroke", "black");

  // Create y-axis
  const yAxis = document.createElementNS(svgNS, "line");
  yAxis.setAttribute("x1", "0");
  yAxis.setAttribute("y1", "0");
  yAxis.setAttribute("x2", "0");
  yAxis.setAttribute("y2", "200");
  yAxis.setAttribute("stroke", "black");

  // Add x-axis labels (IDs)
  data.forEach((d, i) => {
    const x = i * scaleX;
    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", x);
    text.setAttribute("y", "215");
    text.setAttribute("font-size", "10");
    text.setAttribute("text-anchor", "middle");
    text.textContent = d.id;
    svg.appendChild(text);
  });

  // Add y-axis labels (Amounts)
  for (let i = 0; i <= maxAmount; i += maxAmount / 5) {
    const y = 200 - i * scaleY;
    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", "-5");
    text.setAttribute("y", y);
    text.setAttribute("font-size", "10");
    text.setAttribute("text-anchor", "end");
    text.setAttribute("dominant-baseline", "middle");
    text.textContent = i.toFixed(0);
    svg.appendChild(text);
  }

  // Add hover effect to show amount
  data.forEach((d, i) => {
    const x = i * scaleX;
    const y = 200 - d.amount * scaleY;
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", "3");
    circle.setAttribute("fill", "red");

    const tooltip = document.createElementNS(svgNS, "text");
    tooltip.setAttribute("x", x);
    tooltip.setAttribute("y", y - 10);
    tooltip.setAttribute("font-size", "10");
    tooltip.setAttribute("text-anchor", "middle");
    tooltip.setAttribute("visibility", "hidden");
    tooltip.textContent = d.amount;

    circle.addEventListener("mouseover", () => {
      tooltip.setAttribute("visibility", "visible");
    });

    circle.addEventListener("mouseout", () => {
      tooltip.setAttribute("visibility", "hidden");
    });

    svg.appendChild(circle);
    svg.appendChild(tooltip);
  });

  svg.appendChild(path);
  svg.appendChild(xAxis);
  svg.appendChild(yAxis);
  svgContainer.appendChild(svg);
}
