import { attachEventHandlers } from "./eventHandlers/attachHandlers.js";

async function main() {
  attachEventHandlers();
}

window.onload = main;
