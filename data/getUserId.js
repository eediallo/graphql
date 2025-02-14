import { retrieveJwtFromStorage } from "./storage.js";

function decodeUserJWT(token) {
  try {
    const [header, payload, signature] = token.split(".");
    const decodedPayload = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(decodedPayload);
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
}

export function getUserId() {
  let userId = "";
  const jwtToken = retrieveJwtFromStorage();
  if (jwtToken) {
    const payload = decodeUserJWT(jwtToken);
    if (payload) {
      userId = payload.sub; // Extract the user ID
    }
  }
  return userId;
}
