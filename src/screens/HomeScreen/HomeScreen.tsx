import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';
import {Lable, MainRadialGradient, MainSafeArea} from 'components';

export const HomeScreen = () => {
  const navigate = useNavigation();
  return (
    <MainSafeArea>
      <MainRadialGradient>
        <Button
          title="Huong nghiem"
          onPress={() => navigate.navigate('CareerNavigator')}
        />
        <Lable>OK</Lable>
      </MainRadialGradient>
    </MainSafeArea>
  );
};
