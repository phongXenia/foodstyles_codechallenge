import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import {
  SCREEN_NAME,
  PUBLIC_STACK_SCREENS,
  PRIVATE_STACK_SCREENS,
} from '@app/src/navigation/StackScreens';
import { useAppSelector } from '@app/src/hooks/reduxCustomHook';
import { authSelector } from '@app/src/features/auth/redux/auth.slice';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const { user } = useAppSelector(authSelector);
  const screenList = user ? PRIVATE_STACK_SCREENS : PUBLIC_STACK_SCREENS;

  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.LOGIN_OPTION}
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      {screenList.map((screen) => {
        return <Stack.Screen key={screen.name} {...screen} />;
      })}
    </Stack.Navigator>
  );
};
