import { userData } from "../data/data.js";
import { firstNameEl } from "../queries/domQueries.js";

const { firstName } = userData[0].data.user[0].attrs;
export function displayFirstName() {
  console.log(userData, "userData");
  if (firstNameEl) {
    firstNameEl.textContent = firstName;
  }
}
