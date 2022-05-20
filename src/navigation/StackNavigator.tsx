import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { STACK_SCREENS } from '@app/src/navigation/StackScreens';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginOptionScreen"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      {STACK_SCREENS.map((screen) => {
        return <Stack.Screen {...screen} />;
      })}
    </Stack.Navigator>
  );
};
