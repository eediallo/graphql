import { retrieveJwtFromStorage } from "./storage.js";
import { loginHandler } from "../eventHandlers/eventHandlers.js";
import { getUserData } from "./getUserData.js";

export async function loginAndRetriveUserData(e) {
  e.preventDefault();
  loginHandler();
  const jwt = retrieveJwtFromStorage();
  const userData = await getUserData(jwt);
  return userData;
}
