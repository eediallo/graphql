import { setUserData } from "./storage.js";
import { retriveUserData } from "./retriveUserData.js";
import { getUserId } from "./getUserId.js";

export async function retrieveAndStoreUserData() {
  const userData = await retriveUserData();
  const userId = getUserId();
  setUserData(userId.toString(), userData);
}
