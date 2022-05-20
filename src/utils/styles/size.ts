import { StyleSheet } from 'react-native';
import { sizeHeight, sizeWidth } from '@app/src/utils/helpers/sizing';

const commonSizes: number[] = [
  14, 15, 16, 18, 20, 22, 30, 38, 43, 70, 93, 152, 236,
];

export const styleSize: any = StyleSheet.create({
  ...commonSizes.reduce((result, size) => {
    const commonSize = {
      [`mx_${size}`]: {
        marginHorizontal: size,
      },
      [`my_${size}`]: {
        marginVertical: size,
      },
      [`mt_${size}`]: {
        marginTop: size,
      },
      [`mb_${size}`]: {
        marginBottom: size,
      },
      [`ml_${size}`]: {
        marginLeft: size,
      },
      [`mr_${size}`]: {
        marginRight: size,
      },
      [`px_${size}`]: {
        paddingHorizontal: size,
      },
      [`py_${size}`]: {
        paddingVertical: size,
      },
      [`pt_${size}`]: {
        paddingTop: size,
      },
      [`pb_${size}`]: {
        paddingBottom: size,
      },
      [`pl_${size}`]: {
        paddingLeft: size,
      },
      [`pr_${size}`]: {
        paddingRight: size,
      },
      [`p_${size}`]: {
        padding: size,
      },
      [`text${size}`]: {
        fontSize: size,
      },
      [`width${size}`]: {
        width: size,
      },
      [`height${size}`]: {
        height: size,
      },
      [`minWidth${size}`]: {
        minWidth: size,
      },
      [`minHeight${size}`]: {
        minHeight: size,
      },
      [`maxWidth${size}`]: {
        maxWidth: size,
      },
      [`maxHeight${size}`]: {
        maxHeight: size,
      },
      [`size${size}`]: {
        height: size,
        width: size,
        borderRadius: size / 2,
      },
      [`lh${size}`]: {
        lineHeight: size,
      },
    };
    result = {
      ...result,
      ...commonSize,
    };
    return result;
  }, {}),
  sizeHeight100: {
    height: sizeHeight(100),
  },
  sizeWidth100: {
    width: sizeWidth(100),
  },
  h100: {
    height: '100%',
  },
  w100: {
    width: '100%',
  },
});
