import styleBase from '@app/src/utils/styles/base';
import { COLOR_DEFAULT } from '@app/src/utils/styles/color';
import React, { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as yup from 'yup';
import TextInput from '@app/src/components/TextInput';
import { styleSize } from '@app/src/utils/styles/size';
import Button from '@app/src/components/Button';
import { useAppDispatch } from '@app/src/hooks/reduxCustomHook';
import { AuthActions } from '@app/src/features/auth/redux/auth.action';
import { ILoginWithEmailActionBody } from '@app/src/features/auth/redux/auth.type';

const LoginContainer = () => {
  const schema = useMemo(
    () =>
      yup.object({
        email: yup.string().required('Email is required.'),
        password: yup.string().required('Password is required.'),
      }),
    [],
  );
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data: ILoginWithEmailActionBody) => {
    dispatch(AuthActions.loginWithEmail(data));
  };

  return (
    <View
      style={[styleBase.container, styleBase.safeTop, styleBase.safeBottom]}>
      <LinearGradient
        colors={[COLOR_DEFAULT.ORANGISH, COLOR_DEFAULT.MAIZE]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0 }}
        style={[styleBase.fillParent, styleBase.center, styleSize.px_38]}>
        <FormProvider {...methods}>
          <TextInput autoCapitalize="none" name="email" label="Email" />
          <TextInput name="password" secureTextEntry label="Password" />
          <Button
            onPress={methods.handleSubmit(onSubmit)}
            style={[styleSize.mt_14]}
            type="link"
            label="LOG IN"
          />
        </FormProvider>
      </LinearGradient>
    </View>
  );
};

export default LoginContainer;
