/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { ApolloProvider } from '@apollo/react-hooks';
import { apolloCLient } from '@app/src/services/apollo';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StackNavigator } from '@app/src/navigation/StackNavigator';
import { navigationRef } from '@app/src/utils/navigation';
import { Provider } from 'react-redux';
import { persistor, store } from '@app/src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloCLient}>
        <NavigationContainer ref={navigationRef}>
          <PersistGate persistor={persistor}>
            <StackNavigator />
          </PersistGate>

          <FlashMessage position="top" />
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
