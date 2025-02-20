import { getUserProfileData } from "../data/data.js";
import { personalInfo } from "../queries/domQueries.js";
import { createElement } from "./helperFunctions.js";

export async function createUserProfile() {
  const userProfileData = await getUserProfileData();
  const { firstName, lastName, tel, addressCity, email } =
    userProfileData[0].attrs;

  const fullName = createElement(
    `<strong>Full Name</strong>: ${firstName} ${lastName}`,
    "p"
  );
  const telEl = createElement(`<strong>Tel</strong>: ${tel}`, "p");
  const emailEl = createElement(`<strong>Email</strong>: ${email}`, "p");
  const locationEl = createElement(
    `<strong>Location</strong>: ${addressCity}`,
    "p"
  );
  const campusEl = createElement(
    `<strong>Campus</strong>: ${userProfileData[0].campus}`,
    "p"
  );
  personalInfo.append(fullName, emailEl, telEl, locationEl, campusEl);
}
