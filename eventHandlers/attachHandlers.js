import { loginBtn, logoutBtn } from "../queries/domQueries.js";
import { loginHandler, logoutHandler } from "./eventHandlers.js";
import { getUserData } from "../data/getUserData.js";
import { retrieveJwtFromStorage } from "../data/storage.js";

export function attachEventHandlers() {
  loginBtn.addEventListener("click", async () => {
    loginHandler();
    const jwt = retrieveJwtFromStorage();
    const userTable = await getUserData(jwt);
    console.log(userTable);
  });
  logoutBtn.addEventListener("click", logoutHandler);
}
