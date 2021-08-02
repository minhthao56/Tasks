import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosError, AxiosResponse} from 'axios';
import {URL_SNET_API} from '@env';
import {Alert} from 'react-native';
import {ETokenName} from 'constants/token';
import store from 'redux-app/store';
import {doLogoutSystem} from 'redux-app';

const baseURL = URL_SNET_API;
const axiosMain = axios.create({
  baseURL: baseURL + 'api/',
});

axiosMain.interceptors.response.use(
  (res: AxiosResponse<{content: any; message: string; result: number}>) => {
    if (res.data.result === 0) {
      Alert.alert(`${res.data.message}`);
    }
    return res;
  },
  (err: AxiosError) => {
    if (err.response?.status === 401) {
      store.dispatch(doLogoutSystem());
    }
    if (err.response?.status === 400 || err.response?.status === 404) {
      Alert.alert(`Đã có lỗi hệ thống! ${err.response?.status}`);
    }
    throw err;
  },
);
axiosMain.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem(ETokenName.CommunityToken);
    config.headers = {
      'content-type': 'application/json',
      Authorization: token,
    };
    return config;
  },
  error => Promise.reject(error),
);
export default axiosMain;
