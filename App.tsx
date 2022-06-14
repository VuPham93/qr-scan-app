import 'react-native-gesture-handler';
// @ts-ignore
import type {Node} from 'react';
import React from 'react';
import {ErrorResponse, onError} from '@apollo/client/link/error';
import {setContext} from '@apollo/client/link/context';
import {BatchHttpLink} from '@apollo/client/link/batch-http';
import {
  ApolloClient,
  ApolloProvider,
  defaultDataIdFromObject,
  InMemoryCache,
  split,
} from '@apollo/client';
import {createUploadLink} from 'apollo-upload-client';
import {getAuthToken, removeAuthToken} from './src/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/views/Login';
import Home from './src/views/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CheckList from './src/views/CheckList';
import ListView from './src/views/ListView';
import CheckListSelect from './src/views/CheckListSelect';

import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);

interface ResponseError extends ErrorResponse {
  networkError?: Error & {
    statusCode?: number;
    bodyText?: string;
  };
}

const invalidTokenLink = onError((error: ResponseError) => {
  if (error.networkError && error.networkError.statusCode === 401) {
    removeAuthToken();
  }
});

const authLink = setContext((_, context) => {
  const authToken = getAuthToken();

  return {
    ...context,
    headers: {
      ...context.headers,
      Authorization: authToken ? `JWT ${authToken}` : null,
    },
  };
});

const linkOptions = {
  credentials: 'same-origin',
  uri: 'http://192.168.100.50:28080/graphql/',
};
const uploadLink = createUploadLink(linkOptions);
const batchLink = new BatchHttpLink({
  batchInterval: 100,
  ...linkOptions,
});

const link = split(
  operation => operation.getContext().useBatching,
  batchLink,
  uploadLink,
);

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache({
    dataIdFromObject: (obj: any) => {
      if (obj.__typename === 'Shop') {
        return 'shop';
      }
      return defaultDataIdFromObject(obj);
    },
  }),
  link: invalidTokenLink.concat(authLink.concat(link)),
});

const Stack = createNativeStackNavigator();

const App: () => Node = () => (
  <ApolloProvider client={apolloClient}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} options={{ title: 'Quét mã' }}/>
          <Stack.Screen name="CheckListSelect" component={CheckListSelect} options={{ title: 'Chọn cỡ' }}/>
          <Stack.Screen name="CheckList" component={CheckList} options={{ title: 'Sửa nhiều cỡ' }}/>
          <Stack.Screen name="ListView" component={ListView} options={{ title: 'Xem danh sách' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  </ApolloProvider>
);

export default App;
