import {gql} from "@apollo/client";


export const GET_CHARACTERS = gql`query {
    characters {
      results {
        id,
        name,
        image,
        episode {
          id,
          name,
          episode,
        },
        location {
          id,
          name,
        }
      }
    }
  }`;