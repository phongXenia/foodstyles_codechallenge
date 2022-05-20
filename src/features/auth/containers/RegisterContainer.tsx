import React, { useMemo } from 'react';
import { View } from 'react-native';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styleBase from '@app/src/utils/styles/base';
import { styleSize } from '@app/src/utils/styles/size';
import { GradientBackground } from '@app/src/components/GradientBackground';
import { AuthActions } from '@app/src/features/auth/redux/auth.action';
import { useAppDispatch, useAppSelector } from '@app/src/hooks/reduxCustomHook';
import TextInput from '@app/src/components/TextInput';
import Button from '@app/src/components/Button';
import { styleColor } from '@app/src/utils/styles/color';
import { Typo } from '@app/src/components/Typo';
import { authSelector } from '@app/src/features/auth/redux/auth.slice';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const RegisterContainer = () => {
  const dispatch = useAppDispatch();
  const { errorMessage, isLoading } = useAppSelector(authSelector);

  const validationSchema = useMemo(() => {
    return yup.object({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Invalid email').required('Email is required.'),
      password: yup.string().min(6).required('Password is required.'),
    });
  }, []);

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit } = methods;
  const onSubmitForm = (values: any) => {
    dispatch(AuthActions.registerWithEmail(values));
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[styleBase.container, styleBase.safeTop]}>
      <GradientBackground />
      <View style={[styleSize.px_38, styleBase.center, styleSize.mt_27]}>
        <FormProvider {...methods}>
          <TextInput name="name" label="Your name" />
          <TextInput autoCapitalize="none" name="email" label="Email" />
          <TextInput
            name="password"
            secureTextEntry
            label="Password (min 6 characters)"
          />
          {!!errorMessage && (
            <View
              style={[
                styleSize.mt_14,
                styleColor.bgTomato,
                styleBase.borderButton,
                styleSize.px_9,
                styleSize.py_4,
              ]}>
              <Typo
                style={[
                  styleBase.FontBold,
                  styleColor.textWhite,
                  styleSize.text16,
                  styleBase.textCenter,
                ]}>
                {errorMessage}
              </Typo>
            </View>
          )}
          <Button
            loading={isLoading}
            onPress={handleSubmit(onSubmitForm)}
            style={[styleSize.mt_14]}
            label="SIGN UP"
          />
        </FormProvider>
      </View>
    </KeyboardAwareScrollView>
  );
};
