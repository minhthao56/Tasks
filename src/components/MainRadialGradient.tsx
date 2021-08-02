/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import RadialGradient from 'react-native-radial-gradient';

export const MainRadialGradient: React.FC = ({children}) => {
  return (
    <RadialGradient
      colors={['#414A7B', '#232948', '#14172C']}
      //   stops={[ 0.75]}
      radius={200}
      style={{flex: 1}}>
      {children}
    </RadialGradient>
  );
};
