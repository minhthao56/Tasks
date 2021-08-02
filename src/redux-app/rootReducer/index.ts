import {PayloadAction, combineReducers} from '@reduxjs/toolkit';
import auth from '../slice/appSlice/authSlice';

const appReducer = combineReducers({
  auth,
});
export const rootReducer = (state: any, action: PayloadAction) => {
  if (action.type === 'auth@/doLogoutSystem') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
