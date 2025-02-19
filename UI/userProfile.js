import { userData } from "../data/data.js";
import { firstNameEl, profileContainer } from "../queries/domQueries.js";
import { createElement } from "./transactionTables.js";

const { firstName, lastName, tel, addressCity, email } =
  userData[0].data.user[0].attrs;
export function displayFirstName() {
  console.log(userData, "userData");
  if (firstNameEl) {
    firstNameEl.textContent = firstName;
  }
}

export function createUserProfile() {
  const fullName = createElement(`${firstName} ${lastName}`, "h1");
  const telEl = createElement(`<strong>Tel</strong>: ${tel}`, "p");
  const emailEl = createElement(`<strong>Email</strong>: ${email}`, "p");
  const locationEl = createElement(
    `<strong>Location</strong>: ${addressCity}`,
    "p"
  );
  const campusEl = createElement(
    `<strong>Campus</strong>: ${userData[0].data.user[0].campus}`,
    "p"
  );
  profileContainer.append(fullName, emailEl, telEl, locationEl, campusEl);
}
