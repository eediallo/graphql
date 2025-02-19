import { getUserId } from "./getUserId.js";
import { getData } from "./storage.js";

const userID = getUserId();
const userData = getData(userID);

const transactionData = userData[1].data.transaction;
const golangTransactionData = transactionData.filter(
  (trans) => trans.type === "skill_go"
);

const javaScriptTransactionData = transactionData.filter(
  (trans) => trans.type === "skill_js"
);

const xpTransactionData = transactionData.filter(
  (trans) => trans.type === "xp"
);

const progressData = userData[2].data.progress;
const validProgressData = progressData.filter(
  (progress) => progress.grade !== null
);

const transactionsTableHeaders = [
  {
    id: "ID",
    type: "Type",
    amount: "Amount",
    campus: "Campus",
    project: "Project",
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
const transData = {
  golangTransactionData,
  javaScriptTransactionData,
  xpTransactionData,
  validProgressData,
};
export { userData, transactionsTableHeaders, progressTableHeaders, transData };
