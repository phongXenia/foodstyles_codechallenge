import React, {useMemo} from 'react';
import {View} from 'react-native';
import styleBase from '@app/src/utils/styles/base';
import { styleColor } from '@app/src/utils/styles/color';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {styleColor} from '@app/src/utils/styles/color';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '@app/src/hooks/reduxCustomHook';
import {useAppSelector} from '@app/src/hooks/reduxCustomHook';
import TextInput from '@app/src/components/TextInput';
import Button from '@app/src/components/Button';
import { resetAuthState } from '@app/src/features/auth/redux/auth.slice';
import {Typo} from '@app/src/components/Typo';
import {styleSize} from '@app/src/utils/styles/size';

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
      name: user?.name || '',
      email: user?.email || '',
    },
  });
  const dispatch = useAppDispatch();
  return (
    <View
      style={[styleBase.container, styleColor.bgWhiteTwo, styleBase.safeTop]}>
      <View style={[styleSize.px_18]}>
        <Typo
          style={[
            styleSize.text15,
            styleBase.FontSemiBold,
            styleColor.textGreyishBrown,
          ]}>
          PROFILE
        </Typo>
      </View>

      <View style={[styleSize.px_18]}>
        <FormProvider {...methods}>
          <TextInput
            labelStyle={[styleColor.textGreyishBrown]}
            style={[
              styleColor.textGreyishBrown,
              styleBase.FontSemiBold,
              styleColor.bgSecondary,
              styleSize.height35,
              styleSize.text16,
              styleSize.px_11,
            ]}
            name="name"
            label="Name shown on your shared cards"
          />
          <TextInput
            autoCapitalize="none"
            labelStyle={[styleColor.textGreyishBrown]}
            style={[
              styleColor.textGreyishBrown,
              styleColor.bgSecondary,
              styleBase.FontSemiBold,
              styleSize.height35,
              styleSize.text16,
              styleSize.px_11,
            ]}
            name="email"
            label="Email"
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
    </View>
  );
};
