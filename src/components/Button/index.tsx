import { Typo } from '@app/src/components/Typo';
import styleBase from '@app/src/utils/styles/base';
import { styleColor } from '@app/src/utils/styles/color';
import { styleSize } from '@app/src/utils/styles/size';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  style?: StyleProp<ViewStyle>;
  label: string;
  onPress?: () => void;
  type: 'outlined' | 'link';
};
const Button: React.FC<Props> = ({ style, label, onPress, type = 'link' }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        type === 'outlined' && styleColor.border,
        styleSize.py_14,
        styleSize.px_43,
        styleBase.roundCornerButton,
        type === 'outlined' && styleColor.borderWhiteThree,
        type === 'link' && styleColor.bgAquaGreen,
        styleBase.center,
        style,
      ]}>
      <Typo
        style={[
          styleBase.FontBold,
          type === 'outlined'
            ? styleColor.textThreeWhite
            : styleColor.textWhite,
        ]}>
        {label}
      </Typo>
    </TouchableOpacity>
  );
};

export default Button;
