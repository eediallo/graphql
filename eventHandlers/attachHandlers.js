import { loginBtn, logoutBtn } from "../queries/domQueries.js";
import { logout } from "./logout.js";
import { login } from "./login.js";

export function attachEventHandlers() {
  loginBtn.addEventListener("click", async (e) => {
    await login(e);
  });
  logoutBtn.addEventListener("click", logout);
}
