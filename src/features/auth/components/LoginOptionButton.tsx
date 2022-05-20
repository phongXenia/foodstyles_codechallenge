import React, { FC } from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
import { styleSize } from '@app/src/utils/styles/size';
import styleBase from '@app/src/utils/styles/base';
import { Typo } from '@app/src/components/Typo';
import { styleColor } from '@app/src/utils/styles/color';

type Props = {
  title: string;
  onPress?: () => void;
  icon?: ImageSourcePropType;
  iconStyle?: StyleProp<ImageStyle>;
};

export const LoginOptionButton: FC<Props> = ({
  title,
  onPress,
  icon,
  iconStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styleSize.height43,
        styleSize.width236,
        styleBase.row,
        styleBase.center,
        styleBase.roundCornerButton,
        styleColor.bgWhite,
      ]}>
      {icon && <Image source={icon} style={iconStyle} />}
      <Typo
        styles={[
          styleSize.text16,
          styleBase.FontSemiBold,
          styleSize.lh18,
          styleSize.ml_9,
        ]}>
        {title}
      </Typo>
    </TouchableOpacity>
  );
};
