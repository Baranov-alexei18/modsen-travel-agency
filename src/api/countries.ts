import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const API_COUNTRY = 'https://countries.trevorblades.com';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: API_COUNTRY,
});

export const LIST_COUNTRIES = gql`
    {
      countries {
        name
        code
      }
    }
  `;
