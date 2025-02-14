import { firstNameEl } from "../queries/domQueries.js";

export function displayFirstName(name) {
  if (firstNameEl) {
    firstNameEl.textContent = name;
  }
}
