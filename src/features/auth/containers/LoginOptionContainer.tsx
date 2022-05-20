import React from 'react';
import { View, Image } from 'react-native';
import styleBase from '@app/src/utils/styles/base';
import { styleSize } from '@app/src/utils/styles/size';
import { Typo } from '@app/src/components/Typo';
import { LoginOptionButton } from '@app/src/features/auth/components/LoginOptionButton';
import { COLOR_DEFAULT, styleColor } from '@app/src/utils/styles/color';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigate } from '@app/src/utils/navigation';
import { SCREEN_NAME } from '@app/src/navigation/StackScreens';

export const LoginOptionContainer = () => {
  return (
    <View
      style={[styleBase.container, styleBase.safeTop, styleBase.safeBottom]}>
      <LinearGradient
        colors={[COLOR_DEFAULT.ORANGISH, COLOR_DEFAULT.MAIZE]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0 }}
        style={[styleBase.fillParent]}
      />
      <View style={[styleSize.mt_93, styleSize.mx_152]}>
        <Image source={require('@app/src/assets/images/foodstyleslogo.png')} />
      </View>

      <Typo>Sign in to be able to save your preferences and settings.</Typo>

      <View style={[styleBase.center]}>
        <View style={[styleSize.mt_15]}>
          <LoginOptionButton onPress={() => {}} title="Sign in with Apple" />
        </View>
        <View style={[styleSize.mt_15]}>
          <LoginOptionButton onPress={() => {}} title="Sign in with Facebook" />
        </View>
        <View style={[styleSize.mt_15]}>
          <LoginOptionButton onPress={() => {}} title="Sign in with Google" />
        </View>
        <View style={[styleSize.mt_15]}>
          <LoginOptionButton onPress={() => {}} title="Sign up with Email" />
        </View>
      </View>

      <View style={[styleBase.center, styleSize.mt_20]}>
        <TouchableOpacity onPress={() => navigate(SCREEN_NAME.LOGIN)}>
          <Typo
            styles={[styleColor.textWhite, styleSize.text16, styleSize.lh18]}>
            Login with Email
          </Typo>
        </TouchableOpacity>
      </View>
      <View
        style={[styleBase.container, styleBase.justifyEnd, styleSize.mx_32]}>
        <Typo styles={[styleBase.textCenter, styleColor.textWhite]}>
          By signing in you accept the{' '}
          <Typo styles={[styleBase.textUnderline, styleColor.textWhite]}>
            General Terms
          </Typo>{' '}
          and{' '}
          <Typo styles={[styleBase.textUnderline, styleColor.textWhite]}>
            Privacy Policy
          </Typo>
        </Typo>
      </View>
      <View style={[styleBase.center, styleSize.mt_20]} />
    </View>
  );
};
