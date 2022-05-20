import React, { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styleBase from '@app/src/utils/styles/base';
import { Typo } from '@app/src/components/Typo';
import { styleSize } from '@app/src/utils/styles/size';
import { GradientBackground } from '@app/src/components/GradientBackground';
import { AuthActions } from '@app/src/features/auth/redux/auth.action';
import { useAppDispatch } from '@app/src/hooks/reduxCustomHook';

export const RegisterContainer = () => {
  const dispatch = useAppDispatch();
  const validationSchema = useMemo(() => {
    return yup.object({
      name: yup.string().required(),
      email: yup.string().required('Email is required.'),
      password: yup.string().required('Password is required.'),
    });
  }, []);

  const { handleSubmit, setValue } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmitForm = (values: any) => {
    dispatch(AuthActions.registerWithEmail(values));
  };

  return (
    <View style={[styleBase.container, styleBase.safeTop]}>
      <GradientBackground />
      <TouchableOpacity
        style={{ marginTop: 200 }}
        onPress={() => {
          setValue('name', 'Lam');
          setValue('email', 'lam.nguyen+4@xenia.tech');
          setValue('password', '123123');

          handleSubmit(onSubmitForm)();
        }}>
        <Typo style={[styleSize.text30]}>Sign up</Typo>
      </TouchableOpacity>
    </View>
  );
};
