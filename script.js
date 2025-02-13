import { usernameEl, passwordEl, loginBtn } from "./queries.js";
const loginEndpoint = "https://learn.01founders.co/api/auth/signin";
const credentials = {
  username: usernameEl.value.trim(),
  password: passwordEl.value.trim(),
};

async function fetchLoginEndPoints() {
  console.log(credentials, "credentials");
  const resp = await fetch(loginEndpoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await resp.json();
  return data;
}

async function loginHandler() {
  const credentials = await fetchLoginEndPoints();
  console.log(credentials);
}

loginBtn.addEventListener("click", loginHandler);
