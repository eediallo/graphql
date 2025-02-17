import { getData } from "./storage.js";
import { getUserProfile } from "./getUserProfile.js";
import { graphqlQueries } from "../queries/grapqlQueries.js";

export async function retriveUserData() {
  const jwt = getData("jwt");
  const userData = await getUserProfile(jwt, graphqlQueries.profileQuery);
  return userData;
}
