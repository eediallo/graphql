import { svgContainer } from "../queries/domQueries.js";

export function createBarGraph(data) {
  svgContainer.innerHTML = "";
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "500");
  svg.setAttribute("height", "300"); // Increased height to accommodate labels
  svg.setAttribute("viewBox", "0 0 500 300");

  const maxAmount = Math.max(...data.map((d) => d.amount));
  const barWidth = 500 / data.length;
  const scaleY = 200 / maxAmount;

  // Create bars
  data.forEach((d, i) => {
    const x = i * barWidth;
    const y = 200 - d.amount * scaleY;
    const height = d.amount * scaleY;

    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", barWidth - 1);
    rect.setAttribute("height", height);
    rect.setAttribute("class", "bar");

    // Add title for hover effect
    const title = document.createElementNS(svgNS, "title");
    title.textContent = d.amount;
    rect.appendChild(title);

    svg.appendChild(rect);
  });

  // Create x-axis
  const xAxis = document.createElementNS(svgNS, "line");
  xAxis.setAttribute("x1", "0");
  xAxis.setAttribute("y1", "200");
  xAxis.setAttribute("x2", "500");
  xAxis.setAttribute("y2", "200");
  xAxis.setAttribute("class", "axis");

  // Create y-axis
  const yAxis = document.createElementNS(svgNS, "line");
  yAxis.setAttribute("x1", "0");
  yAxis.setAttribute("y1", "0");
  yAxis.setAttribute("x2", "0");
  yAxis.setAttribute("y2", "200");
  yAxis.setAttribute("class", "axis");

  // Add x-axis labels (Project Names)
  data.forEach((d, i) => {
    const x = i * barWidth + barWidth / 2;

    // Project Name
    const projectName = document.createElementNS(svgNS, "text");
    projectName.setAttribute("x", x);
    projectName.setAttribute("y", "220"); // Adjusted y position to be below the x-axis
    projectName.setAttribute("class", "axis-label");
    projectName.setAttribute("transform", `rotate(45, ${x}, 220)`); // Adjusted rotation point
    const project = d.path.split("/").at(-1);
    projectName.textContent = project;
    svg.appendChild(projectName);
  });

  // Add y-axis labels (Amounts)
  for (let i = 0; i <= maxAmount; i += maxAmount / 5) {
    const y = 200 - i * scaleY;
    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", "-5");
    text.setAttribute("y", y);
    text.setAttribute("class", "axis-label");
    text.setAttribute("text-anchor", "end");
    text.setAttribute("dominant-baseline", "middle");
    text.textContent = i.toFixed(0);
    svg.appendChild(text);
  }

  // Add y-axis label
  const yAxisLabel = document.createElementNS(svgNS, "text");
  yAxisLabel.setAttribute("x", "-30");
  yAxisLabel.setAttribute("y", "100");
  yAxisLabel.setAttribute("class", "y-axis-label");
  yAxisLabel.textContent = "Amount";
  svg.appendChild(yAxisLabel);

  svg.appendChild(xAxis);
  svg.appendChild(yAxis);
  svgContainer.appendChild(svg);
}