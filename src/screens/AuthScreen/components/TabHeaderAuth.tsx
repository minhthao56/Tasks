import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {Block, ButtonGradient} from 'components';
import React from 'react';

export const TabHeaderAuth: React.FC<MaterialTopTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <Block
      center
      row
      backgroundColor="#4a517a"
      borderRadius={16}
      spaceAround
      marginHorizontal={18}
      paddingVertical={6}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <ButtonGradient
            key={index}
            onPress={onPress}
            width={180}
            isWhiteGray={!isFocused}>
            {label}
          </ButtonGradient>
        );
      })}
    </Block>
  );
};
