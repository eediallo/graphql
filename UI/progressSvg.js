import { svgContainer } from "../queries/domQueries.js";

export function createPieChart(data) {
  svgContainer.innerHTML = "";
  const { passPercentage, failPercentage } = calculatePassFailPercentages(data);

  const svgNamespace = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNamespace, "svg");
  svg.setAttribute("width", "200");
  svg.setAttribute("height", "200");
  svg.setAttribute("viewBox", "0 0 32 32");

  const passArc = createArc(16, 16, 16, 0, (passPercentage / 100) * 360, "green");
  const failArc = createArc(16, 16, 16, (passPercentage / 100) * 360, 360, "red");

  svg.appendChild(passArc);
  svg.appendChild(failArc);
  svgContainer.append(svg);

  createLegends(passPercentage, failPercentage);
}

function createArc(cx, cy, r, startAngle, endAngle, color) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
    "M", start.x, start.y,
    "A", r, r, 0, largeArcFlag, 0, end.x, end.y,
    "L", cx, cy,
    "Z"
  ].join(" ");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);
  path.setAttribute("fill", color);

  return path;
}

function polarToCartesian(cx, cy, r, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

  return {
    x: cx + (r * Math.cos(angleInRadians)),
    y: cy + (r * Math.sin(angleInRadians))
  };
}

export function calculatePassFailPercentages(data) {
  const total = data.length;
  const passCount = data.filter((d) => d.grade >= 1).length;
  const failCount = total - passCount;
  const passPercentage = (passCount / total) * 100;
  const failPercentage = (failCount / total) * 100;
  return { passPercentage, failPercentage };
}

function createLegends(passPercentage, failPercentage) {
  const legendContainer = document.createElement("div");
  legendContainer.style.display = "flex";
  legendContainer.style.justifyContent = "space-around";
  legendContainer.style.marginTop = "10px";

  const passLegend = document.createElement("div");
  passLegend.style.display = "flex";
  passLegend.style.alignItems = "center";
  const passColorBox = document.createElement("div");
  passColorBox.style.width = "20px";
  passColorBox.style.height = "20px";
  passColorBox.style.backgroundColor = "green";
  passColorBox.style.marginRight = "5px";
  const passText = document.createElement("span");
  passText.textContent = `Pass: ${passPercentage.toFixed(2)}%`;
  passLegend.append(passColorBox, passText);

  const failLegend = document.createElement("div");
  failLegend.style.display = "flex";
  failLegend.style.alignItems = "center";
  const failColorBox = document.createElement("div");
  failColorBox.style.width = "20px";
  failColorBox.style.height = "20px";
  failColorBox.style.backgroundColor = "red";
  failColorBox.style.marginRight = "5px";
  const failText = document.createElement("span");
  failText.textContent = `Fail: ${failPercentage.toFixed(2)}%`;
  failLegend.append(failColorBox, failText);

  legendContainer.append(passLegend, failLegend);
  svgContainer.append(legendContainer);
}