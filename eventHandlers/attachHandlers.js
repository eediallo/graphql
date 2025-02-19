import {
  goTransBtn,
  jsTransBtn,
  loginBtn,
  logoutBtn,
  xpTransBtn,
} from "../queries/domQueries.js";
import { logout } from "./logout.js";
import { login } from "./login.js";
import {
  golangTransactionTable,
  javaScriptTransactionTable,
  xpTransactionTable,
} from "../UI/transactionTables.js";

export function attachEventHandlers() {
  if (loginBtn) {
    loginBtn.addEventListener("click", async (e) => {
      await login(e);
    });
  }

  if (loginBtn) {
    logoutBtn.addEventListener("click", logout);
  }

  if (goTransBtn) {
    goTransBtn.addEventListener("click", golangTransactionTable);
  }
  if (xpTransBtn) {
    xpTransBtn.addEventListener("click", xpTransactionTable);
  }

  if (jsTransBtn) {
    jsTransBtn.addEventListener("click", javaScriptTransactionTable);
  }
}
