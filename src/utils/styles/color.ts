import { StyleSheet } from 'react-native';

export const COLOR_DEFAULT = {
  WHITE: '#fff',
  WHITE_THREE: '#d9d9d9',
  BLACK: '#000',
  TOMATO: '#f13838',
  ORANGISH: 'rgb(250,119,69)',
  MAIZE: 'rgb(243,196,66)',
  AQUA_GREEN: '#11ce90',
};

export const styleColor = StyleSheet.create({
  bgTomato: {
    backgroundColor: COLOR_DEFAULT.TOMATO,
  },
  bgWhite: {
    backgroundColor: COLOR_DEFAULT.WHITE,
  },
  bgAquaGreen: {
    backgroundColor: COLOR_DEFAULT.AQUA_GREEN,
  },
  textWhite: {
    color: COLOR_DEFAULT.WHITE,
  },
  textBlack: {
    color: COLOR_DEFAULT.BLACK,
  },
  textThreeWhite: {
    color: COLOR_DEFAULT.WHITE_THREE,
  },
  border: {
    borderWidth: 2,
  },
  borderBlack: {
    borderColor: COLOR_DEFAULT.BLACK,
  },
  borderWhiteThree: {
    borderColor: COLOR_DEFAULT.WHITE_THREE,
  },
});
