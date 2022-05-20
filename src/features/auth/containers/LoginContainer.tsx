import { Typo } from '@app/src/components/Typo';
import styleBase from '@app/src/utils/styles/base';
import { COLOR_DEFAULT } from '@app/src/utils/styles/color';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().required('Email is required.'),
  password: yup.string().required('Password is required.'),
});

const LoginContainer = () => {
  const {control, handleSubmit} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <View
      style={[styleBase.container, styleBase.safeTop, styleBase.safeBottom]}>
      <LinearGradient
        colors={[COLOR_DEFAULT.ORANGISH, COLOR_DEFAULT.MAIZE]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0 }}
        style={[styleBase.fillParent]}>
        <Typo>Hello</Typo>
      </LinearGradient>
    </View>
  );
};

export default LoginContainer;
