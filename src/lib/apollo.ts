import {
  ApolloClient,
  ApolloProvider as _ApolloProvider,
  InMemoryCache,
  gql,
  useQuery as _useQuery
} from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_ENDPOINT,
  cache: new InMemoryCache()
});

export const query = gql;
export const useQuery = _useQuery;
export const ApolloProvider = _ApolloProvider;
