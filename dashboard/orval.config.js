module.exports = {
  immersiveai: {
    output: {
      mode: "tags-split",
      target: "src/generated/queries",
      schemas: "src/generated/schemas",
      client: "react-query",
      clean: true,
      prettier: true,
      override: {
        mutator: {
          path: "./customMutator.ts",
          name: "customMutator",
        },
      },
    },
    input: {
      target: "../backend/openapi.json",
    },
  },
};
