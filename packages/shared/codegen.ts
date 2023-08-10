import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql",
  documents: "../../apps/server/src/schema.graphql.ts",
  generates: {
    "src/__graphql__/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
