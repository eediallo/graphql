import { getUserId } from "./getUserId.js";
import { getData } from "./storage.js";

const userID = getUserId();
const userData = getData(userID);

const transactionsTableHeaders = [
  {
    id: "ID",
    type: "Type",
    amount: "Amount",
    campus: "Campus",
    path: "Path",
  },
];

export { userData, transactionsTableHeaders };
