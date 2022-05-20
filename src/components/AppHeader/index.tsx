import { Typo } from '@app/src/components/Typo';
import { goBack } from '@app/src/utils/navigation';
import styleBase from '@app/src/utils/styles/base';
import { styleColor } from '@app/src/utils/styles/color';
import { styleSize } from '@app/src/utils/styles/size';
import React from 'react';
import { Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AppHeader: React.FC<{ label: string }> = ({ label }) => {
  return (
    <View
      style={[
        styleBase.row,
        styleBase.safeTop,
        styleBase.alignCenter,
        styleBase.justifyBetween,
        styleSize.px_7,
      ]}>
      <TouchableOpacity
        onPress={() => goBack()}
        style={[
          styleSize.pl_4,
          styleColor.bgWhite,
          styleBase.center,
          styleSize.size41,
        ]}>
        <Image
          style={[styleSize.size20]}
          source={require('@app/src/assets/images/back-icon.png')}
        />
      </TouchableOpacity>
      <Typo
        style={[styleBase.FontBold, styleSize.text22, styleColor.textWhite]}>
        {label}
      </Typo>
      <View style={[styleSize.size41]} />
    </View>
  );
};

export default AppHeader;
