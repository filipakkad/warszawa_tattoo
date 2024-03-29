/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tquery KursDwutygodniowy {\n\t\teditionsTwoWeeksCollection {\n\t\t\titems {\n\t\t\t\ttitle\n\t\t\t\tedycjaOd\n\t\t\t\tedycjaDo\n\t\t\t\twolneMiejsca\n\t\t\t}\n\t\t}\n\t}\n": types.KursDwutygodniowyDocument,
    "\n\tquery KursTygodniowy {\n\t\teditionsWeekCollection {\n\t\t\titems {\n\t\t\t\ttitle\n\t\t\t\tedycjaOd\n\t\t\t\tedycjaDo\n\t\t\t\twolneMiejsca\n\t\t\t}\n\t\t}\n\t}\n": types.KursTygodniowyDocument,
    "\n\tquery KursWeekendowy {\n\t\teditionsWeekendCollection {\n\t\t\titems {\n\t\t\t\ttitle\n\t\t\t\twolneMiejsca\n\t\t\t\tdatyKursow\n\t\t\t}\n\t\t}\n\t}\n": types.KursWeekendowyDocument,
    "\n    query Cena {\n        priceCollection {\n            items {\n                price\n                sys {\n                    publishedAt\n                }\n            }\n        }\n    }\n": types.CenaDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery KursDwutygodniowy {\n\t\teditionsTwoWeeksCollection {\n\t\t\titems {\n\t\t\t\ttitle\n\t\t\t\tedycjaOd\n\t\t\t\tedycjaDo\n\t\t\t\twolneMiejsca\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery KursDwutygodniowy {\n\t\teditionsTwoWeeksCollection {\n\t\t\titems {\n\t\t\t\ttitle\n\t\t\t\tedycjaOd\n\t\t\t\tedycjaDo\n\t\t\t\twolneMiejsca\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery KursTygodniowy {\n\t\teditionsWeekCollection {\n\t\t\titems {\n\t\t\t\ttitle\n\t\t\t\tedycjaOd\n\t\t\t\tedycjaDo\n\t\t\t\twolneMiejsca\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery KursTygodniowy {\n\t\teditionsWeekCollection {\n\t\t\titems {\n\t\t\t\ttitle\n\t\t\t\tedycjaOd\n\t\t\t\tedycjaDo\n\t\t\t\twolneMiejsca\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery KursWeekendowy {\n\t\teditionsWeekendCollection {\n\t\t\titems {\n\t\t\t\ttitle\n\t\t\t\twolneMiejsca\n\t\t\t\tdatyKursow\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery KursWeekendowy {\n\t\teditionsWeekendCollection {\n\t\t\titems {\n\t\t\t\ttitle\n\t\t\t\twolneMiejsca\n\t\t\t\tdatyKursow\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Cena {\n        priceCollection {\n            items {\n                price\n                sys {\n                    publishedAt\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query Cena {\n        priceCollection {\n            items {\n                price\n                sys {\n                    publishedAt\n                }\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;