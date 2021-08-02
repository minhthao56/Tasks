import {Platform} from 'react-native';

export const isIOS = () => {
  if (Platform.OS === 'ios') {
    return true;
  }
  return false;
};
