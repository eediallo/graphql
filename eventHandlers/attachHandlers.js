import { loginBtn, logoutBtn } from "../queries.js";
import { loginHandler, logoutHandler } from "./eventHandlers.js";

export function attachEventHandlers() {
  loginBtn.addEventListener("click", loginHandler);
  logoutBtn.addEventListener("click", logoutHandler);
}
