import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {heightScale, widthScale} from 'utils';
import {IButton} from './@types/Button';

export const Button: React.FC<IButton> = ({
  children,
  flex,
  style,
  row,
  white,
  noflex,
  backgroundColor,
  flexDirection,
  column,
  center,
  middle,
  spaceBetween,
  stretch,
  relative,
  absolute,
  wrap,
  opacity,
  borderColor,
  borderRadius,
  zIndex,
  right,
  left,
  top,
  bottom,
  width,
  height,
  alignItems,
  borderStyle,
  borderWidth,
  alignSelf,
  position,
  maxWidth,
  maxHeight,
  minHeight,
  minWidth,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  onPress,
  activeOpacity,
}) => {
  const styleButton: StyleProp<ViewStyle> = [
    style,
    row && {flexDirection: 'row'},
    flex && {flex: 1},
    typeof flex === 'number' && {flex},
    white && {backgroundColor: 'white'},
    noflex && {flex: 0},
    column && {flexDirection: 'column'},
    center && {alignItems: 'center'},
    middle && {justifyContent: 'center'},
    spaceBetween && {justifyContent: 'space-between'},
    stretch && {alignItems: 'stretch'},
    relative && {position: 'relative'},
    absolute && {position: 'absolute'},
    wrap && {flexWrap: 'wrap'},
    width && {width: widthScale(width)},
    height && {height: heightScale(height)},
    maxWidth && {maxWidth: widthScale(maxWidth)},
    maxHeight && {maxHeight: heightScale(maxHeight)},
    minHeight && {minHeight: heightScale(minHeight)},
    minWidth && {minWidth: widthScale(minWidth)},
    typeof width === 'string' && {width: width},
    typeof height === 'string' && {height: height},
    borderColor && {borderColor},
    borderRadius && {borderRadius},
    borderStyle && {borderStyle},
    borderWidth && {borderWidth},
    opacity && {opacity},
    zIndex && {zIndex},
    right && {right},
    left && {left},
    top && {top},
    bottom && {bottom},
    backgroundColor && {backgroundColor},
    alignItems && {alignItems},
    alignSelf && {alignSelf},
    flexDirection && {flexDirection},
    position && {position},
    padding && {padding},
    paddingBottom && {paddingBottom},
    marginLeft && {marginLeft},
    paddingLeft && {paddingLeft},
    paddingRight && {paddingRight},
    paddingTop && {paddingTop},
    margin && {margin},
    marginBottom && {marginBottom},
    marginLeft && {marginLeft},
    marginRight && {marginRight},
    marginTop && {marginTop},
  ];

  return (
    <TouchableOpacity
      style={styleButton}
      onPress={onPress}
      activeOpacity={activeOpacity}>
      {children}
    </TouchableOpacity>
  );
};
