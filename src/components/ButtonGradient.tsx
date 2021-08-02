/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import {IButtonGradient} from './@types/ButtonGradient';
import {Button} from './Button';
import {Lable} from './Lable';
import {gradientWhiteGray} from 'constants/gradient';

export const ButtonGradient: React.FC<IButtonGradient> = ({
  children,
  width = 150,
  height = 48,
  borderRadius = 100,
  isWhiteGray,
  ...props
}) => {
  const checkColorButton = () => {
    let propsGradent: LinearGradientProps = {
      colors: ['#91efff', '#3955ff'],
    };
    if (isWhiteGray) {
      propsGradent = gradientWhiteGray;
      return propsGradent;
    }
    return propsGradent;
  };

  return (
    <Button {...props} width={width} height={height}>
      <LinearGradient
        {...checkColorButton()}
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: borderRadius,
        }}>
        <Lable bold>{children}</Lable>
      </LinearGradient>
    </Button>
  );
};
