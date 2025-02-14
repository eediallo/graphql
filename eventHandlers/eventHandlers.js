import {
  usernameOrEmailEl,
  passwordEl,
  errorMsgEl,
} from "../queries/domQueries.js";
import { getUserJWT } from "../data/getUserJWT.js";
import {
  retrieveJwtFromStorage,
  saveJwtToLocalStorage,
  removeJwtFromLocalStorage,
} from "../data/storage.js";

let jwtToken = retrieveJwtFromStorage();

export async function loginHandler() {
  const usernameOrEmail = usernameOrEmailEl.value.trim();
  const password = passwordEl.value.trim();

  if (!username || !password) {
    errorMsgEl.textContent = "Please enter both username and password.";
    return;
  }

  try {
    const token = await getUserJWT(usernameOrEmail, password);
    if (!token) {
      throw new Error("Token not found in the response");
    }

    jwtToken = token;
    saveJwtToLocalStorage(jwtToken);
    errorMsgEl.textContent = "";
    usernameOrEmailEl.value = "";
    passwordEl.value = "";
    alert("Login successful!");
  } catch (error) {
    errorMsgEl.textContent = error.message;
    console.error("Login Error:", error);
  }
}

export function logoutHandler() {
  jwtToken = null;
  removeJwtFromLocalStorage();
  console.log("Logged out");
  alert("Logged out successfully!");
}
