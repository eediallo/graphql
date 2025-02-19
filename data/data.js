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

const progressTableHeaders = [
  {
    id: "ID",
    project: "Project",
    grade: "Grade",
    status: "Status",
  },
];

export { userData, transactionsTableHeaders, progressTableHeaders };
