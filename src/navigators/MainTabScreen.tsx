import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {isIphoneX} from 'react-native-iphone-x-helper';

import {SettingScreen, HomeScreen} from 'screens';
import {Ecolors} from 'constants/themes';
import {SvgHomeBtn, SvgSettingBtn} from 'assets';
import {heightScale, widthScale} from 'utils';

const Tab = createBottomTabNavigator();

export const MainTabScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          borderTopWidth: 0,
          borderTopColor: 'transparent',
          position: 'absolute',
          backgroundColor: Ecolors.BottomBarHomeColor,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.4,
          shadowRadius: 3.84,
          elevation: 5,
          borderTopLeftRadius: widthScale(16),
          borderTopRightRadius: widthScale(16),
          height: isIphoneX() ? heightScale(92) : heightScale(74),
        },
        inactiveTintColor: 'white',
        allowFontScaling: false,
        showLabel: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <SvgHomeBtn isActived={focused} />,
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => <SvgSettingBtn isActived={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};
