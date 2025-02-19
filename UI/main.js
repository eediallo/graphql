import { attachEventHandlers } from "../eventHandlers/attachHandlers.js";
import { createSummary } from "./summary.js";
import { createUserProfile, displayFirstName } from "./userProfile.js";

function main() {
  createUserProfile();
  createSummary();
  displayFirstName();
  attachEventHandlers();
}

window.onload = main;
