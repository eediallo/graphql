import { retriveUserData } from "./retriveUserData.js";

export async function getUserProfileData() {
  const userData = await retriveUserData();
  console.log(userData, "userData====>");
  return userData[0].data.user;
}

export async function getTransactionData() {
  const userData = await retriveUserData();
  return userData[1].data.transaction;
}

export async function getProgressData() {
  const userData = await retriveUserData();
  return userData[2].data.progress;
}

export async function getGoTransactionData() {
  const transactionData = await getTransactionData();
  const golangTransactionData = transactionData.filter(
    (trans) => trans.type === "skill_go"
  );
  return golangTransactionData;
}

export async function getJSTransactionData() {
  const transactionData = await getTransactionData();
  const jsTransactionData = transactionData.filter(
    (trans) => trans.type === "skill_js"
  );
  return jsTransactionData;
}

export async function getXPsTransactionData() {
  const transactionData = await getTransactionData();
  const xpTransactionData = transactionData.filter(
    (trans) => trans.type === "xp"
  );
  return xpTransactionData;
}

export async function getValideProgressData() {
  const progessData = await getProgressData();
  const validProgressData = progessData.filter((p) => p.grade !== null);
  const sucessProjects = validProgressData.filter((p) => p.grade >= 1);
  const faildedPorjects = validProgressData.filter((p) => p.grade < 1);
  return [...sucessProjects, ...faildedPorjects];
}

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
    attempts: "Attempts",
  },
];

export { transactionsTableHeaders, progressTableHeaders };
