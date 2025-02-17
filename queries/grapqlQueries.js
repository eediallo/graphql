const profileQuery = `#graphql
{
    user {
        attrs
        campus
    }
}`;
const rewardTransactionQuery = `#graphql
{
  transaction(where: {eventId: {_eq: 433}, type: {_in: ["skill_js", "skill_go", "xp"]}}) {
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
  progress(where: {eventId: {_eq: 433}}) {
    id,
    createdAt,
    updatedAt,
    userId,
    groupId,
    eventId,
    version,
    isDone,
    path,
    campus
  }
}
`;

export const graphqlQueries = {
  profileQuery,
  roleQuery,
  progressQuery,
  rewardTransactionQuery,
};
