import {Ecolors} from 'constants/themes';
import React from 'react';
import {isIOS} from 'utils';
import {IInputAuth} from './@types/InputAuth';
import {Input} from './Input';

export const InputAuth: React.FC<IInputAuth> = ({
  paddingHorizontal,
  paddingVertical,
  borderWidth = 1,
  borderColor = Ecolors.ColorInputAuth,
  borderRadius = 100,
  padding = isIOS() ? 17 : 11,
  placeholderTextColor = Ecolors.ColorInputAuth,
  ...props
}) => {
  return (
    <Input
      {...props}
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      borderWidth={borderWidth}
      borderColor={borderColor}
      borderRadius={borderRadius}
      padding={padding}
      placeholderTextColor={placeholderTextColor}
    />
  );
};
