import { retrieveJwtFromStorage } from "./storage.js";
import { getUserData } from "./getUserData.js";

export async function retriveUserData() {
  const jwt = retrieveJwtFromStorage();
  const userData = await getUserData(jwt);
  return userData;
}
