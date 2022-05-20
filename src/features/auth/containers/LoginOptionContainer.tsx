import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styleBase from '@app/src/utils/styles/base';
import { styleSize } from '@app/src/utils/styles/size';
import { Typo } from '@app/src/components/Typo';
import { LoginOptionButton } from '@app/src/features/auth/components/LoginOptionButton';
import { styleColor } from '@app/src/utils/styles/color';
import { navigate } from '@app/src/utils/navigation';
import { SCREEN_NAME } from '@app/src/navigation/StackScreens';
import { GradientBackground } from '@app/src/components/GradientBackground';

export const LoginOptionContainer = () => {
  return (
    <View
      style={[styleBase.container, styleBase.safeTop, styleBase.safeBottom]}>
      <GradientBackground />
      <View style={[styleSize.mt_93, styleSize.mx_152, styleBase.center]}>
        <Image source={require('@app/src/assets/images/foodstyleslogo.png')} />
      </View>

      <Typo
        styles={[
          styleSize.mt_30,
          styleSize.text18,
          styleSize.lh22,
          styleBase.textCenter,
          styleSize.px_38,
          styleColor.textWhite,
        ]}>
        Sign in to be able to save your preferences and settings.
      </Typo>

      <View style={[styleBase.center, styleSize.mt_30]}>
        <View style={[styleSize.mt_15]}>
          <LoginOptionButton
            icon={require('@app/src/assets/images/appleicon.png')}
            iconStyle={{ width: 15, height: 18, marginBottom: 4 }}
            onPress={() => {}}
            title="Sign in with Apple"
          />
        </View>
        <View style={[styleSize.mt_15]}>
          <LoginOptionButton
            icon={require('@app/src/assets/images/facebookicon.png')}
            iconStyle={{ marginBottom: 2 }}
            onPress={() => {}}
            title="Sign in with Facebook"
          />
        </View>
        <View style={[styleSize.mt_15]}>
          <LoginOptionButton
            icon={require('@app/src/assets/images/googleicon.png')}
            onPress={() => {}}
            title="Sign in with Google"
          />
        </View>
        <View style={[styleSize.mt_15]}>
          <LoginOptionButton
            onPress={() => navigate(SCREEN_NAME.REGISTER)}
            title="Sign up with Email"
          />
        </View>
      </View>

      <View style={[styleBase.center, styleSize.mt_20]}>
        <TouchableOpacity
          onPress={() => navigate(SCREEN_NAME.LOGIN)}
          hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}>
          <Typo
            styles={[
              styleColor.textWhite,
              styleBase.FontSemiBold,
              styleSize.text16,
              styleSize.lh18,
            ]}>
            Log in with Email
          </Typo>
        </TouchableOpacity>
      </View>
      <View
        style={[styleBase.container, styleBase.justifyEnd, styleSize.mx_32]}>
        <Typo
          styles={[
            styleBase.textCenter,
            styleColor.textWhite,
            styleBase.FontSemiBold,
          ]}>
          By signing in you accept the{' '}
          <Typo
            styles={[
              styleBase.textUnderline,
              styleColor.textWhite,
              styleBase.FontSemiBold,
            ]}>
            General Terms
          </Typo>{' '}
          and{' '}
          <Typo
            styles={[
              styleBase.textUnderline,
              styleColor.textWhite,
              styleBase.FontSemiBold,
            ]}>
            Privacy Policy
          </Typo>
        </Typo>
      </View>
    </View>
  );
};
