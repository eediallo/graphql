import { attachEventHandlers } from "../eventHandlers/attachHandlers.js";
import { createUserProfile, displayFirstName } from "./userProfile.js";

function main() {
  createUserProfile();
  displayFirstName();
  attachEventHandlers();
}

window.onload = main;
