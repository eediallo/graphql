const profileQuery = `#graphql
{
    user {
        attrs
        campus
    }
}`;

const transactionQuery = `#graphql
{
  user {
    xp
  }
}

`

export const graphqlQueries = {
  profileQuery,
};
