import React, { useMemo } from 'react';
import { View } from 'react-native';
import styleBase from '@app/src/utils/styles/base';
import { styleColor } from '@app/src/utils/styles/color';
import { Typo } from '@app/src/components/Typo';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppSelector } from '@app/src/hooks/reduxCustomHook';

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
  return (
    <View style={[styleBase.container, styleColor.bgWhiteTwo]}>
      <FormProvider {...methods}>
        <View>
          <Typo style={[styleBase.FontSemiBold]}>
            Name shown on your shared cards
          </Typo>
        </View>
        <View>
          <Typo style={[styleBase.FontSemiBold]}>
            Name shown on your shared cards
          </Typo>
        </View>
      </FormProvider>
    </View>
  );
};
