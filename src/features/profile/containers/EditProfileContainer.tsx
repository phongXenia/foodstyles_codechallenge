import React, {useMemo} from 'react';
import {View} from 'react-native';
import styleBase from '@app/src/utils/styles/base';
import {styleColor} from '@app/src/utils/styles/color';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useAppSelector} from '@app/src/hooks/reduxCustomHook';
import TextInput from '@app/src/components/TextInput';
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
      </View>
    </View>
  );
};
