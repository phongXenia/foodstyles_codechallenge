import React from 'react';
import { Image, View } from 'react-native';
import styleBase from '@app/src/utils/styles/base';
import { styleSize } from '@app/src/utils/styles/size';
import { Typo } from '@app/src/components/Typo';
import { LoginOptionButton } from '@app/src/features/auth/components/LoginOptionButton';
import { styleColor } from '@app/src/utils/styles/color';

export const LoginOptionContainer = () => {
  return (
    <View
      style={[styleBase.container, styleBase.safeTop, styleBase.safeBottom]}>
      <View style={[styleSize.mt_93, styleSize.mx_152]}>
        <Image source={require('@app/src/assets/images/foodstyleslogo.png')} />
      </View>

      <Typo
        styles={[
          styleSize.mt_30,
          styleSize.text18,
          styleSize.lh22,
          styleBase.textCenter,
          styleSize.px_38,
        ]}>
        Sign in to be able to save your preferences and settings.
      </Typo>

      <View style={[styleBase.center, styleSize.mt_30]}>
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
        <Typo styles={[styleColor.textWhite, styleSize.text16, styleSize.lh18]}>
          Login with Email
        </Typo>
      </View>
      <View
        style={[styleBase.container, styleBase.justifyEnd, styleSize.mx_32]}>
        <Typo styles={[styleBase.textCenter, styleColor.textWhite]}>
          By signing in you accept the General Terms and Privacy Policy
        </Typo>
      </View>
    </View>
  );
};
