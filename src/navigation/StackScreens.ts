import { LoginOptionContainer as LoginOptionScreen } from '@app/src/features/auth/containers/LoginOptionContainer';
import { ScreenListType } from '@app/src/navigation/StackNavigator.interface';

export enum SCREEN_NAME {
  LOGIN_OPTION = 'LoginOptionScreen',
}

export const STACK_SCREENS: ScreenListType[] = [
  {
    name: SCREEN_NAME.LOGIN_OPTION,
    component: LoginOptionScreen,
  },
];
