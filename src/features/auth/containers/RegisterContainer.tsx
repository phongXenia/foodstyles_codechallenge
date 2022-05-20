import React, { useMemo } from 'react';
import { View } from 'react-native';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styleBase from '@app/src/utils/styles/base';
import { styleSize } from '@app/src/utils/styles/size';
import { GradientBackground } from '@app/src/components/GradientBackground';
import { AuthActions } from '@app/src/features/auth/redux/auth.action';
import { useAppDispatch } from '@app/src/hooks/reduxCustomHook';
import TextInput from '@app/src/components/TextInput';
import Button from '@app/src/components/Button';

export const RegisterContainer = () => {
  const dispatch = useAppDispatch();
  const validationSchema = useMemo(() => {
    return yup.object({
      name: yup.string().required(),
      email: yup.string().required('Email is required.'),
      password: yup.string().min(6).required('Password is required.'),
    });
  }, []);

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const {
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting },
  } = methods;
  const onSubmitForm = (values: any) => {
    dispatch(AuthActions.registerWithEmail(values));
  };

  return (
    <View style={[styleBase.container, styleBase.safeTop]}>
      <GradientBackground />
      <View style={[styleSize.px_38, styleBase.center]}>
        <FormProvider {...methods}>
          <TextInput name="name" label="Your name" />
          <TextInput
            autoCapitalize="none"
            name="email"
            secureTextEntry
            label="Password"
          />
          <TextInput
            name="password"
            secureTextEntry
            label="Password (min 6 characters)"
          />
          <Button
            disabled={!isDirty || !isValid || isSubmitting}
            onPress={handleSubmit(onSubmitForm)}
            style={[styleSize.mt_14]}
            label="SIGN UP"
          />
        </FormProvider>
      </View>
    </View>
  );
};
