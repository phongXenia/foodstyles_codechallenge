import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import styleBase from '@app/src/utils/styles/base';
import { styleSize } from '@app/src/utils/styles/size';
import { Typo } from '@app/src/components/Typo';
import { useAppDispatch } from '@app/src/hooks/reduxCustomHook';
import { AuthActions } from '@app/src/features/auth/redux/auth.action';

export const LoginOptionContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(AuthActions.loginWithEmail({}));
  }, []);
  return (
    <View style={[styleBase.container, {backgroundColor: 'green'}]}>
      <View style={[styleSize.mt_93, styleSize.mx_152]}>
        <Image
          source={require('../../../assets/images/foodstyleslogo@2x.png')}
        />
      </View>

      <Typo>Sign in to be able to save your preferences and settings.</Typo>
    </View>
  );
};
