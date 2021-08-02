import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Login, Register, TabHeaderAuth} from './components';
import {Lable, MainSafeArea} from 'components';
import {useEffect} from 'react';
import {useAppDispatch} from 'hooks';
import {doLogin} from 'redux-app/asyncAction';

const Tab = createMaterialTopTabNavigator();

export const AuthScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doLogin({password: '12345678', phone: 'minhthao5648@gmail.com'}));
  }, [dispatch]);
  return (
    <MainSafeArea>
      <Lable>LOGO</Lable>
      <Tab.Navigator tabBar={props => <TabHeaderAuth {...props} />}>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{title: 'Đăng nhập'}}
        />
        <Tab.Screen
          name="Register"
          component={Register}
          options={{title: 'Đăng ký'}}
        />
      </Tab.Navigator>
    </MainSafeArea>
  );
};
