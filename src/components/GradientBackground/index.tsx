import { COLOR_DEFAULT } from '@app/src/utils/styles/color';
import styleBase from '@app/src/utils/styles/base';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

export const GradientBackground = () => {
  return (
    <LinearGradient
      colors={[COLOR_DEFAULT.ORANGISH, COLOR_DEFAULT.MAIZE]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0 }}
      style={[styleBase.fillParent]}
    />
  );
};
