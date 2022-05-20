import React, { FC, ReactNode } from 'react';
import { Text, TextProps } from 'react-native';
import styleBase from '@app/src/utils/styles/base';
import { styleColor } from '@app/src/utils/styles/color';

type Props = {
  children?: ReactNode;
  styles?: any[];
  selectable?: boolean;
  onPress?: () => void;
  adjustsFontSizeToFit?: boolean;
  textProps?: TextProps;
};

export const Typo: FC<Props & TextProps> = ({
  onPress,
  styles = [],
  children,
  selectable = false,
  adjustsFontSizeToFit,
  ...props
}) => {
  return (
    <Text
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      selectable={selectable}
      onPress={onPress}
      style={[styleBase.FontRegular, styleColor.textBlack, ...styles]}
      {...props}>
      {children}
    </Text>
  );
};
