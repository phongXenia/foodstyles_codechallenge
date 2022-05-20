import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { store } from '@app/src/redux/store';

const BASE_URL = 'https://api-dev.foodstyles.com/graphql';

const httpLink = createHttpLink({
  uri: BASE_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  const accessToken = store.getState().auth.accessToken;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  };
});
export const apolloCLient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
