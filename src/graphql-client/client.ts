import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${
    import.meta.env.VITE_CONTENTFUL_SPACE
  }`,
  {
    headers: {
      authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN}`,
    },
  }
);