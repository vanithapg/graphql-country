import { gql } from "@apollo/client";

export const LOAD_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
    }
  }
`;

export const FETCH_COUNTRY = gql`
  query FetchCountry($code: ID!) {
    country(code: $code) {
      code
      name
      native
      capital
      emoji
      currency
    }
  }
`;
