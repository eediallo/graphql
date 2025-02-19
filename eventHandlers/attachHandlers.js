import { goTransBtn, loginBtn, logoutBtn } from "../queries/domQueries.js";
import { logout } from "./logout.js";
import { login } from "./login.js";
import { golangTransactionTable } from "../UI/transactionTables.js";

export function attachEventHandlers() {
  if (loginBtn) {
    loginBtn.addEventListener("click", async (e) => {
      await login(e);
    });
  }

  if (loginBtn) {
    logoutBtn.addEventListener("click", logout);
  }
  goTransBtn.addEventListener("click", golangTransactionTable);
}
