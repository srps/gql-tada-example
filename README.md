# gql.tada Example - Pokémon API

This is an example of how to use the `gql.tada` GraphQL Plugin with the Pokémon GraphQL example API.

Created with Vite, React, SWC, and gql-tada.

Bootsrapped with the Vite React SWC template and [gql.tada example](https://github.com/0no-co/gql.tada/tree/main/examples/example-pokemon-api)

Uses the [Pokémon GraphQL API](https://trygql.formidable.dev/graphql/basic-pokedex) as the data source.

## Getting Started

Install the dependencies:

```bash
pnpm install
# or
bun install
```

Then, run the development server:

```bash
pnpm dev
# or
bun dev
```


With the `gql.tada` plugin, opening the editor will generate the types for inference from the graphql schema.

You can then benefit from the LSP provided, with type-checking and autocomplete directly in the query. The query result is also correctly typed according to the definitions.

## Notes

This example initizalizes `gql.tada` manually (See `graphql.ts`)

If using VSCode, ensure that the Typescript version is the workspace one.

## Learn More

To learn more about `gql.tada`, take a look at the following resources:

[gql-data website](https://gql-tada.0no.co/)
