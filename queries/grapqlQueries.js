const profileQuery = `#graphql
{
    user {
        attrs
        campus
    }
}`;
const rewardTransactionQuery = `#graphql
{
  transaction(where: {type: {_in: ["skill_js", "skill_go", "xp"]}}) {
    id,
    type,
    amount,
    userId,
    eventId,
    campus,
    path,
  }
}
`;

const roleQuery = `#graphql
{
  role {
    id,
    slug,
    name,
    description,
    createdAt,
    updatedAt
  }
}
`;

const progressQuery = `#graphql
{
  progress{
    id,
    createdAt,
    updatedAt,
    userId,
    groupId,
    eventId,
    version,
    grade,
    isDone,
    path,
    campus
  }
}
`;

const auditQuery = `#graphql
{
  audit {
    id,
    grade,
  }
}
`;

export const graphqlQueries = {
  profileQuery,
  roleQuery,
  progressQuery,
  rewardTransactionQuery,
  auditQuery,
};
