import { useQuery } from "@tanstack/react-query";
import { graphql } from "../gql";
import { graphQLClient } from "../graphql-client/client.ts";
import { CenaQuery } from "../gql/graphql.ts";

const price = graphql(/* GraphQL */ `
    query Cena {
        priceCollection {
            items {
                price
                sys {
                    publishedAt
                }
            }
        }
    }
`);
export const Price = () => {
  const { data } = useQuery<CenaQuery>({
    queryKey: ["price"],
    queryFn: async () => graphQLClient.request(price),
  });

  const prices = data?.priceCollection?.items;
  const theLatestPrice = prices?.reduce((prev, curr) => {
    const currDate = new Date(curr?.sys.publishedAt);
    const currPrice = curr?.price;
    if (!prev.date || prev.date <= currDate) {
      return {
        price: currPrice || 0,
        date: currDate
      }
    }
    return prev;
  }, { price: 0, date: null } as { price?: number, date: null | Date })
  return theLatestPrice?.price;
};
