import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AuthScreen} from 'screens';
import {GlobalStackScreens} from './GlobalStackScreens';
import {Ecolors} from '../constants';
import {TransitionScreenOptions} from 'utils/optionScreen';

const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: Ecolors.PrimaryColor,
  },
};
const MainStack = createStackNavigator();
export const Navigators = () => {
  const isLogined = false;
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={Ecolors.PrimaryColor}
        barStyle="light-content"
      />
      <NavigationContainer theme={MyTheme}>
        <MainStack.Navigator
          headerMode="none"
          screenOptions={TransitionScreenOptions}>
          {isLogined ? (
            <MainStack.Screen
              name="GlobalStackScreens"
              component={GlobalStackScreens}
            />
          ) : (
            <MainStack.Screen
              component={AuthScreen}
              name="AuthScreen"
              options={{animationTypeForReplace: isLogined ? 'push' : 'pop'}}
            />
          )}
        </MainStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
