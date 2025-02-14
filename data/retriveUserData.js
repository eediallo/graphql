import { retrieveJwtFromStorage } from "./storage.js";
import { getUserData } from "./getUserData.js";
import { login } from "../eventHandlers/login.js";

export async function loginAndRetriveUserData(e) {
  await login(e);
  const jwt = retrieveJwtFromStorage();
  const userData = await getUserData(jwt);
  console.log("userdata===>", userData);
  return userData;
}
