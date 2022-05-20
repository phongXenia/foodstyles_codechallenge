import React from 'react';
import {View, Image} from 'react-native';
import styleBase from '@app/src/utils/styles/base';
import {styleSize} from '@app/src/utils/styles/size';
import {Typo} from '@app/src/components/Typo';
import {LoginOptionButton} from '@app/src/features/auth/components/LoginOptionButton';

export const LoginOptionContainer = () => {
  return (
    <View style={[styleBase.container]}>
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

      </View>
    </View>
  );
};
