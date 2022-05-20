import { StyleSheet } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
  getTopSpace,
} from '@app/src/utils/helpers/sizing';
import {
  FONT_BOLD,
  FONT_COND_SEMIBOLD,
  FONT_REGULAR,
  FONT_SEMIBOLD,
} from '@app/src/constants/fonts';

const styleBase = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayNone: {
    opacity: 0,
  },
  flexShrink0: {
    flexShrink: 0,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  selfStart: {
    alignSelf: 'flex-start',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  selfEnd: {
    alignSelf: 'flex-end',
  },
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
  },
  fillParent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  fullParent: {
    height: '100%',
    width: '100%',
  },
  positionRelative: {
    position: 'relative',
  },
  positionAbsolute: {
    position: 'absolute',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  bottomRight: {
    left: 'auto',
    right: 0,
    bottom: 0,
  },
  floatBottomRight: {
    left: 'auto',
    right: 24,
    bottom: getBottomSpace(),
  },
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  topRight: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  right: {
    position: 'absolute',
    right: 0,
  },
  topLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  topLeft16: {
    position: 'absolute',
    left: 16,
    top: 16,
  },
  leftRight: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  overflowHidden: {
    overflow: 'hidden',
  },
  textLeft: {
    textAlign: 'left',
  },
  textCenter: {
    textAlign: 'center',
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  grow: {
    flexGrow: 1,
  },
  textWrap: {
    width: 0,
    flexGrow: 1,
  },
  borderButton: {
    borderRadius: 4,
  },
  roundTopCorner10: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  roundTopCorner16: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  roundCorner10: {
    borderRadius: 10,
  },
  roundCornerButton: {
    borderRadius: 30,
  },
  roundedBottomEdge10: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  roundedCorner8: {
    borderRadius: 8,
  },
  roundedCorner16: {
    borderRadius: 16,
  },
  FontRegular: {
    fontFamily: FONT_REGULAR,
  },
  FontBold: {
    fontFamily: FONT_BOLD,
  },
  FontSemiBold: {
    fontFamily: FONT_SEMIBOLD,
  },
  FontCondSemiBold: {
    fontFamily: FONT_COND_SEMIBOLD,
  },
  FontItalic: {
    fontFamily: '',
  },
  safeTop: {
    paddingTop: getTopSpace(true),
  },
  safeTopStatusBar: {
    paddingTop: getStatusBarHeight(true),
  },
  safeBottom: {
    paddingBottom: getBottomSpace(),
  },
});

export default styleBase;
