import { gql } from "graphql-request";

export const GetCharacters = gql`
  query GetCharacters($specie: String, $page: Int, $status: String) {
    characters(page: $page, filter: { status: $status, species: $specie }) {
      info {
        count
        pages
        next
      }
      results {
        id
        name
        species
        status

        origin {
          name
        }
        image
      }
    }
  }
`;
