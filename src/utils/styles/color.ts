import { StyleSheet } from 'react-native';

export const COLOR_DEFAULT = {
  WHITE: '#fff',
  BLACK: '#000',
  ORANGISH: 'rgb(250,119,69)',
  MAIZE: 'rgb(243,196,66)',
};

export const styleColor = StyleSheet.create({
  bgWhite: {
    backgroundColor: COLOR_DEFAULT.WHITE,
  },
  textWhite: {
    color: COLOR_DEFAULT.WHITE,
  },
  textBlack: {
    color: COLOR_DEFAULT.BLACK,
  },
});
