import { getData } from "./storage.js";
import { getUserData } from "./getUserData.js";
import { graphqlQueries } from "../queries/grapqlQueries.js";

export async function retriveUserData() {
  const jwt = getData("jwt");
  const [userProfile, transactionData, progressData] = await Promise.all([
    getUserData(jwt, graphqlQueries.profileQuery),
    getUserData(jwt, graphqlQueries.rewardTransactionQuery),
    getUserData(jwt, graphqlQueries.progressQuery),
  ]);
  return [userProfile, transactionData, progressData];
}
