import {
    usernameEl,
    passwordEl,
    loginBtn,
    logoutBtn,
    errorMsgEl,
} from "./queries.js";
const loginEndpoint = "https://learn.01founders.co/api/auth/signin";
let jwtToken = null;

function encodeCredentials(credentials) {
    return btoa(`${credentials.username}:${credentials.password}`);
}

async function fetchLoginEndPoints(credentials) {
    const encodedCredentials = encodeCredentials(credentials);
    const resp = await fetch(loginEndpoint, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Basic ${encodedCredentials}`,
        },
        body: JSON.stringify(credentials),
    });

    if (!resp.ok) {
        const error = await resp.json();
        throw new Error(
            error.message || "Invalid credentials or unauthorized access"
        );
    }

    const data = await resp.json();
    return data;
}

async function loginHandler() {
    const credentials = {
        username: usernameEl.value.trim(),
        password: passwordEl.value.trim(),
    };

    try {
        const data = await fetchLoginEndPoints(credentials);
        console.log(data);
        jwtToken = data.token; // Assuming the token is in the `token` field of the response
        console.log("JWT Token:", jwtToken);
        errorMsgEl.textContent = ""; // Clear any previous error messages
    } catch (error) {
        errorMsgEl.textContent = error.message;
    }
}

function logoutHandler() {
    jwtToken = null;
    console.log("Logged out");
}

loginBtn.addEventListener("click", loginHandler);
logoutBtn.addEventListener("click", logoutHandler);
