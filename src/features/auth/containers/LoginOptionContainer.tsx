import React from 'react';
import {View, Image} from 'react-native';
import styleBase from '@app/src/utils/styles/base';
import {styleSize} from '@app/src/utils/styles/size';
import {Typo} from '@app/src/components/Typo';

export const LoginOptionContainer = () => {
  return (
    <View style={[styleBase.container]}>
      <View style={[styleSize.mt_93, styleSize.mx_152]}>
        <Image source={require('../../../assets/images/foodstyleslogo.png')} />
      </View>

      <Typo>Sign in to be able to save your preferences and settings.</Typo>
    </View>
  );
};
