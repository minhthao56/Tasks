import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {MainTabScreen} from './MainTabScreen';
import {TransitionScreenOptions} from 'utils/optionScreen';

const GlobalStack = createStackNavigator();
export const GlobalStackScreens = () => {
  return (
    <GlobalStack.Navigator
      headerMode="none"
      screenOptions={TransitionScreenOptions}>
      <GlobalStack.Screen component={MainTabScreen} name="MainTabScreen" />
    </GlobalStack.Navigator>
  );
};
