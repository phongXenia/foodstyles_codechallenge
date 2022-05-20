import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {styleSize} from '@app/src/utils/styles/size';
import styleBase from '@app/src/utils/styles/base';
import {Typo} from '@app/src/components/Typo';
import {styleColor} from '@app/src/utils/styles/color';

type Props = {
  title: string;
  onPress: () => void;
};

export const LoginOptionButton: FC<Props> = ({title, onPress}) => {
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
      <Typo>{title}</Typo>
    </TouchableOpacity>
  );
};
