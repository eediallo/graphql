import { getData } from "./storage.js";
import { getUserData } from "./getUserData.js";

export async function retriveUserData() {
  const jwt = getData("jwt");
  const userData = await getUserData(jwt);
  return userData;
}
