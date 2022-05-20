import React, { useMemo } from 'react';
import { View } from 'react-native';
import styleBase from '@app/src/utils/styles/base';
import { styleColor } from '@app/src/utils/styles/color';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '@app/src/hooks/reduxCustomHook';
import TextInput from '@app/src/components/TextInput';
import Button from '@app/src/components/Button';
import { resetAuthState } from '@app/src/features/auth/redux/auth.slice';

export const EditProfileContainer = () => {
  const user = useAppSelector((state) => state.auth.user);
  const validationSchema = useMemo(() => {
    return yup.object({
      name: yup.string().required(),
      email: yup.string().email().required(),
    });
  }, []);
  const resolver = yupResolver(validationSchema);
  const methods = useForm({
    resolver,
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });
  const dispatch = useAppDispatch();
  return (
    <View
      style={[
        styleBase.container,
        styleColor.bgWhiteTwo,
        styleBase.safeBottom,
      ]}>
      <FormProvider {...methods}>
        <TextInput
          autoCapitalize="none"
          name="email"
          label="Name shown on your shared cards"
        />
        <TextInput
          autoCapitalize="none"
          name="email"
          label="Name shown on your shared cards"
        />
      </FormProvider>
      <View
        style={[styleBase.alignCenter, styleBase.justifyEnd, styleBase.grow]}>
        <Button
          onPress={() => dispatch(resetAuthState())}
          label="LOG OUT"
          type="outlined"
        />
      </View>
    </View>
  );
};
