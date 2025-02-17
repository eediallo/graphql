const profileQuery = `#graphql
{
    user {
        attrs
        campus
    }
}`;

const rewardTransactionQuery = `#graphql
{
  transaction {
    id,
    type,
    amount,
    userId,
    attrs,
    createdAt,
    path,
    objectId,
    eventId,
    campus
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
  progress {
    id,
    createAt,
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
