import { Typo } from '@app/src/components/Typo';
import styleBase from '@app/src/utils/styles/base';
import { COLOR_DEFAULT, styleColor } from '@app/src/utils/styles/color';
import { styleSize } from '@app/src/utils/styles/size';
import React from 'react';
import { StyleProp, ViewStyle, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  style?: StyleProp<ViewStyle>;
  label: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  type?: 'outlined' | 'link' | 'primary';
};
const Button: React.FC<Props> = ({
  style,
  label,
  loading = false,
  disabled = false,
  onPress,
  type = 'primary',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        type === 'outlined' && styleColor.border,
        styleSize.py_14,
        styleSize.px_43,
        styleBase.roundCornerButton,
        type === 'outlined' && styleColor.borderWhiteThree,
        type === 'primary' && styleColor.bgAquaGreen,
        styleBase.center,
        style,
      ]}>
      {loading ? (
        <ActivityIndicator color={COLOR_DEFAULT.WHITE} />
      ) : (
        <Typo
          style={[
            styleBase.FontBold,
            type === 'outlined'
              ? styleColor.textGreyIshBrown
              : styleColor.textWhite,
          ]}>
          {label}
        </Typo>
      )}
    </TouchableOpacity>
  );
};

export default Button;
