import { gql, GraphQLClient } from "graphql-request";

const endpoint = `https://api.hashnode.com/`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: "Bearer 7a6e6363-9657-4eae-99e7-1e5718ad088c",
  },
});

export async function getPosts() {
  const query = gql`
    {
      user(username: "Psypher1") {
        publication {
          posts {
            title
            coverImage
            brief
            slug
            dateAdded
          }
        }
      }
    }
  `;

  return graphQLClient.request(query);
}
