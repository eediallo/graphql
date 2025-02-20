import { attachEventHandlers } from "../eventHandlers/attachHandlers.js";
import { createSummary } from "./summary.js";
import { createUserProfile } from "./userProfile.js";

async function main() {
  await createUserProfile();
  await createSummary();
  attachEventHandlers();
}

window.onload = main;
