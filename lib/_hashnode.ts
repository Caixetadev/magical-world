import { gql, GraphQLClient } from "graphql-request";

const endpoint = `https://api.hashnode.com/`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.HASHNODE_KEY}`,
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
            contentMarkdown
          }
        }
      }
    }
  `;

  return graphQLClient.request(query);
}

export async function getSinglePost() {}
