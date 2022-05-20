import { Typo } from '@app/src/components/Typo';
import { setErrorMessage } from '@app/src/features/auth/redux/auth.slice';
import { useAppDispatch } from '@app/src/hooks/reduxCustomHook';
import styleBase from '@app/src/utils/styles/base';
import { COLOR_DEFAULT } from '@app/src/utils/styles/color';
import { styleSize } from '@app/src/utils/styles/size';
import React, { useEffect } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import {
  StyleProp,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';

const TextInput: React.FC<
  TextInputProps & {
    label?: string;
    labelStyle?: StyleProp<TextStyle>;
    name: string;
    defaultValue?: string;
  }
> = ({
  label,
  defaultValue = '',
  name,
  labelStyle = styles.label,
  ...props
}) => {
  const { control } = useFormContext();
  const dispatch = useAppDispatch();
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    control: control,
    name,
    defaultValue,
  });

  useEffect(() => {
    dispatch(setErrorMessage(error?.message || ''));
  }, [error?.message, dispatch]);

  return (
    <View style={[styleSize.w100, styleSize.py_7]}>
      {Boolean(label) && (
        <View>
          <Typo
            style={[
              styles.label,
              styleBase.FontBold,
              styleSize.mb_7,
              labelStyle,
            ]}>
            {label}
          </Typo>
        </View>
      )}
      <RNTextInput
        style={[styles.input, styleBase.borderButton]}
        {...props}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    color: COLOR_DEFAULT.WHITE,
  },
  input: {
    paddingHorizontal: 14,
    height: 35,
    backgroundColor: COLOR_DEFAULT.WHITE,
  },
});
