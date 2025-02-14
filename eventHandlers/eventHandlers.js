import { usernameOrEmailEl, passwordEl, errorMsgEl } from "../queries.js";
import { getUserJWT } from "../data/getUserJWT.js";
let jwtToken = localStorage.getItem("jwt") || null;

// Handle login
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
    localStorage.setItem("jwt", jwtToken);
    errorMsgEl.textContent = "";
    alert("Login successful!");
  } catch (error) {
    errorMsgEl.textContent = error.message;
    console.error("Login Error:", error);
  }
}

export function logoutHandler() {
  jwtToken = null;
  localStorage.removeItem("jwt");
  console.log("Logged out");
  alert("Logged out successfully!");
}
