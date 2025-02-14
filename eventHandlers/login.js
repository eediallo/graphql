import {
  saveJwtToLocalStorage,
  retrieveJwtFromStorage,
} from "../data/storage.js";

export async function login(usernameOrEmail, password) {
  if (!usernameOrEmail || !password) {
    errorMsgEl.textContent = "Please enter both username and password.";
    return;
  }

  try {
    const token = await getUserJWT(usernameOrEmail, password);
    if (!token) {
      throw new Error("Token not found in the response");
    }

    const jwtToken = retrieveJwtFromStorage();
    jwtToken = token;

    saveJwtToLocalStorage(jwtToken);

    errorMsgEl.textContent = "";
    alert("Login successful!");
    setTimeout(() => {
      redirectToPage("http://localhost:8080/profile.html");
    }, 1000);
  } catch (error) {
    errorMsgEl.textContent = error.message;
    console.error("Login Error:", error);
  }
}
