import 'react-native-gesture-handler';
import React from 'react';
import {Navigators} from './src/navigators/Navigators';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import store from 'redux-app/store';

LogBox.ignoreLogs(['Reanimated 2']);
const App = () => {
  return (
    <Provider store={store}>
      <Navigators />
    </Provider>
  );
};

export default App;
