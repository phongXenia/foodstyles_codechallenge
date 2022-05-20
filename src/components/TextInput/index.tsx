import { Typo } from '@app/src/components/Typo';
import styleBase from '@app/src/utils/styles/base';
import { COLOR_DEFAULT } from '@app/src/utils/styles/color';
import { styleSize } from '@app/src/utils/styles/size';
import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  View,
} from 'react-native';

const TextInput: React.FC<
  TextInputProps & { label?: string; name: string; defaultValue?: string }
> = ({ label, defaultValue = '', name, ...props }) => {
  const { control } = useFormContext();
  const {
    field: { onChange, onBlur, value },
  } = useController({
    control: control,
    name,
    defaultValue,
  });

  return (
    <View style={[styleSize.w100, styleSize.py_7]}>
      {Boolean(label) && (
        <View>
          <Typo style={[styles.label, styleBase.FontBold, styleSize.mb_7]}>
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
