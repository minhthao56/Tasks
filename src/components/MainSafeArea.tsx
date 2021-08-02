/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export const MainSafeArea: React.FC<IMainSafeArea> = ({
  children,
  backgroundColor,
}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor}}>{children}</SafeAreaView>
  );
};
