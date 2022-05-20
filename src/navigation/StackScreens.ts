import LoginContainer from '@app/src/features/auth/containers/LoginContainer';
import { LoginOptionContainer as LoginOptionScreen } from '@app/src/features/auth/containers/LoginOptionContainer';
import { ScreenListType } from '@app/src/navigation/StackNavigator.interface';

export enum SCREEN_NAME {
  LOGIN_OPTION = 'LoginOptionScreen',
  LOGIN = 'LoginScreen',
}

export const STACK_SCREENS: ScreenListType[] = [
  {
    name: SCREEN_NAME.LOGIN_OPTION,
    component: LoginOptionScreen,
  },
  {
    name: SCREEN_NAME.LOGIN,
    component: LoginContainer,
  },
];
