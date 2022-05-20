import { LoginOptionContainer as LoginOptionScreen } from '@app/src/features/auth/containers/LoginOptionContainer';
import { ScreenListType } from '@app/src/navigation/StackNavigator.interface';

export const STACK_SCREENS: ScreenListType[] = [
  {
    name: LoginOptionScreen.name,
    component: LoginOptionScreen,
  },
];
