import { getData } from "./storage.js";
import { getUserData } from "./getUserData.js";
import { graphqlQueries } from "../queries/grapqlQueries.js";

export async function retriveUserData() {
  const jwt = getData("jwt");
  const userData = await getUserData(jwt, graphqlQueries.profileQuery);
  return userData;
}
