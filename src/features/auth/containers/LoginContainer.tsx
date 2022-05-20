import styleBase from '@app/src/utils/styles/base';
import { COLOR_DEFAULT, styleColor } from '@app/src/utils/styles/color';
import React, { useEffect, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TextInput from '@app/src/components/TextInput';
import { styleSize } from '@app/src/utils/styles/size';
import Button from '@app/src/components/Button';
import { useAppDispatch, useAppSelector } from '@app/src/hooks/reduxCustomHook';
import { AuthActions } from '@app/src/features/auth/redux/auth.action';
import { ILoginWithEmailActionBody } from '@app/src/features/auth/redux/auth.type';
import { authSelector } from '@app/src/features/auth/redux/auth.slice';
import { Typo } from '@app/src/components/Typo';

const LoginContainer = () => {
  const schema = useMemo(
    () =>
      yup.object({
        email: yup.string().required('Email and password is required.'),
        password: yup.string().required('Email and password is required.'),
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

  const { errorMessage } = useAppSelector(authSelector);
  const onSubmit = (data: ILoginWithEmailActionBody) => {
    dispatch(AuthActions.loginWithEmail(data));
  };

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
      <View
        style={[
          styleBase.container,
          styleBase.safeTop,
          styleBase.safeBottom,
          styleSize.sizeHeight100,
        ]}>
        <LinearGradient
          colors={[COLOR_DEFAULT.ORANGISH, COLOR_DEFAULT.MAIZE]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0 }}
          style={[styleBase.fillParent, styleBase.center, styleSize.px_38]}>
          <FormProvider {...methods}>
            <TextInput autoCapitalize="none" name="email" label="Email" />
            <TextInput name="password" secureTextEntry label="Password" />
            {!!errorMessage && (
              <View
                style={[
                  styleSize.mt_14,
                  styleColor.bgTomato,
                  styleBase.borderButton,
                  styleSize.px_9,
                  styleSize.py_4,
                ]}>
                <Typo style={[styleBase.FontBold, styleColor.textWhite]}>
                  {errorMessage}
                </Typo>
              </View>
            )}
            <Button
              onPress={methods.handleSubmit(onSubmit)}
              style={[styleSize.mt_14]}
              label="LOG IN"
            />
          </FormProvider>

          <Button type="link" label="Forgot my password" />
        </LinearGradient>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginContainer;
