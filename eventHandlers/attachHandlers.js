import {
  goTransBtn,
  gradeBtn,
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
import { createProgressTable } from "../UI/progress.js";

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
    goTransBtn.addEventListener("click", async () => {
      await golangTransactionTable();
    });
  }
  if (xpTransBtn) {
    xpTransBtn.addEventListener("click", async () => {
      await xpTransactionTable();
    });
  }

  if (jsTransBtn) {
    jsTransBtn.addEventListener("click", async () => {
      await javaScriptTransactionTable();
    });
  }

  if (gradeBtn) {
    gradeBtn.addEventListener("click", async () => {
      await createProgressTable();
    });
  }
}
