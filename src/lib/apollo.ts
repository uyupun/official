import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:57226',
  cache: new InMemoryCache()
});

export const query = gql;
