/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {ApolloProvider} from '@apollo/react-hooks';
import {apolloCLient} from '@app/src/services/apollo';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackNavigator} from '@app/src/navigation/StackNavigator';
import {navigationRef} from '@app/src/utils/navigation';

const App = () => {
  return (
    <ApolloProvider client={apolloCLient}>
      <NavigationContainer ref={navigationRef}>
        <StackNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
