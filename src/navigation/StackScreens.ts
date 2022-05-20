import LoginContainer from '@app/src/features/auth/containers/LoginContainer';
import { LoginOptionContainer } from '@app/src/features/auth/containers/LoginOptionContainer';
import { ScreenListType } from '@app/src/navigation/StackNavigator.interface';
import { RegisterContainer } from '@app/src/features/auth/containers/RegisterContainer';
import { EditProfileContainer } from '@app/src/features/profile/containers/EditProfileContainer';

export enum SCREEN_NAME {
  LOGIN_OPTION = 'LoginOptionScreen',
  LOGIN = 'LoginScreen',
  REGISTER = 'RegisterScreen',
  EDIT_PROFILE = 'EDIT_PROFILE',
}

export const STACK_SCREENS: ScreenListType[] = [
  {
    name: SCREEN_NAME.LOGIN_OPTION,
    component: LoginOptionContainer,
  },
  {
    name: SCREEN_NAME.LOGIN,
    component: LoginContainer,
  },
  {
    name: SCREEN_NAME.REGISTER,
    component: RegisterContainer,
  },
  { name: SCREEN_NAME.EDIT_PROFILE, component: EditProfileContainer },
];
