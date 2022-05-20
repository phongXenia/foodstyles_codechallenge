import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

export const sizeWidth = (size: number) => {
  return size * vw;
};

export const sizeHeight = (size: number) => {
  return size * vh;
};

export const sizeFont = (size: number) => {
  let screenWidth = vw;

  if (Platform.OS === 'android') {
    screenWidth = (vw * 85) / 100;
  }
  return size * screenWidth;
};

export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
}

export function ifIphoneX(iphoneXStyle: any, regularStyle: any) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export function getStatusBarHeight(safe?: any) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
}

export function getTopSpace(safe?: boolean) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: 0,
    default: 0,
  });
}

export function getBottomSpace() {
  return isIphoneX() ? 34 : 14;
}

const deviceHeight = isIphoneX()
  ? height - 78 // iPhone X style SafeAreaView size in portrait
  : Platform.OS === 'android'
  ? height - (StatusBar.currentHeight || 0)
  : height;

export function RFPercentage(percent: number) {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

export function RFValue(fontSize: number) {
  // guideline width for standard 5" device screen
  const standardScreenWidth = 375;
  const widthPercent = (fontSize * width) / standardScreenWidth;
  return Math.round(widthPercent);
}
