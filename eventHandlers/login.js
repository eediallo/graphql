import { saveJwtToLocalStorage, getData } from "../data/storage.js";
import { passwordEl, usernameOrEmailEl } from "../queries/domQueries.js";
import { getUserJWT } from "../data/getUserJWT.js";
import { redirectToPage } from "../redirect.js";

export async function login(e) {
  e.preventDefault();

  const usernameOrEmail = usernameOrEmailEl.value.trim();
  const password = passwordEl.value.trim();
  if (!usernameOrEmail || !password) {
    errorMsgEl.textContent = "Please enter both username and password.";
    return;
  }

  try {
    const token = await getUserJWT(usernameOrEmail, password);
    if (!token) {
      throw new Error("Token not found in the response");
    }

    let jwtToken = getData("jwt");
    jwtToken = token;

    saveJwtToLocalStorage(jwtToken);

    errorMsgEl.textContent = "";
    alert("Login successful!");
    setTimeout(() => {
      redirectToPage("/dashboard.html");
    }, 1000);
  } catch (error) {
    errorMsgEl.textContent = "User does not exist or password is incorrect";
  }
}
