import {createSlice} from '@reduxjs/toolkit';

type TTnitialState = {
  isLogined: boolean;
  token: string;
};

const initialState = {
  isLogined: true,
  token: '',
} as TTnitialState;

const athuSlice = createSlice({
  name: 'auth@',
  initialState: initialState,
  reducers: {
    doLoginSystem(state, action) {
      state.isLogined = true;
      state.token = action.payload;
    },
    doLogoutSystem(state) {
      state.isLogined = false;
    },
    doCheckLogin(state, actions) {
      state.token = actions.payload;
    },
  },
});

const {actions, reducer} = athuSlice;
export const {doLoginSystem, doLogoutSystem, doCheckLogin} = actions;
export default reducer;
