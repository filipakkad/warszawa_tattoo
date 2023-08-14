
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://graphql.contentful.com/content/v1/spaces/yzzhlc8m0xfb": {
        headers: {
          Authorization: ' Bearer e93sstK8-UMc7z3yGhnhlzTz1HMGwNUoKXB-oJ0Xvkk',
        }
      }
    }
  ],
  documents: "src/**/*.tsx",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
