import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com',
});

export const LIST_COUNTRIES = gql`
    {
      countries {
        name
        code
      }
    }
  `;
