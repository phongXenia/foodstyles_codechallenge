import { StyleSheet } from 'react-native';

export const COLOR_DEFAULT = {
  WHITE: '#fff',
  WHITE_TWO: 'rgb(248,248,248)',
  WHITE_THREE: '#d9d9d9',
  SECONDARY: 'rgb(236,236,236)',
  BLACK: '#000',
  TOMATO: '#f13838',
  ORANGISH: 'rgb(250,119,69)',
  MAIZE: 'rgb(243,196,66)',
  GREYISHBROWN: 'rgb(67,67,67)',
  AQUA_GREEN: '#11ce90',
};

export const styleColor = StyleSheet.create({
  bgTomato: {
    backgroundColor: COLOR_DEFAULT.TOMATO,
  },
  bgWhite: {
    backgroundColor: COLOR_DEFAULT.WHITE,
  },
  bgWhiteTwo: {
    backgroundColor: COLOR_DEFAULT.WHITE_TWO,
  },
  bgAquaGreen: {
    backgroundColor: COLOR_DEFAULT.AQUA_GREEN,
  },
  textGreyIshBrown: {
    color: COLOR_DEFAULT.GREYISHBROWN,
  },
  bgSecondary: {
    backgroundColor: COLOR_DEFAULT.SECONDARY,
  },
  textWhite: {
    color: COLOR_DEFAULT.WHITE,
  },
  textGreyishBrown: {
    color: COLOR_DEFAULT.GREYISHBROWN,
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
