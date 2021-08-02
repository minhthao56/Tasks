import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiLogin} from 'api';

export const doLogin = createAsyncThunk(
  'anth@/postLogin',
  async (params: IParamsLogin) => {
    return (await apiLogin.login(params)).data;
  },
);
