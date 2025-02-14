import { loginBtn, logoutBtn } from "../queries/domQueries.js";
import { loginAndRetriveUserData } from "../data/retriveUserData.js";
import { logoutHandler } from "./logout.js";

export function attachEventHandlers() {
  loginBtn.addEventListener("click", async (e) => {
    await loginAndRetriveUserData(e);
  });
  logoutBtn.addEventListener("click", logoutHandler);
}
