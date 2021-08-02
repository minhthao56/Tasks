import axiosCommunity from './axiosCommunity';

export const apiLogin = {
  login: (params: IParamsLogin) => {
    const url = '/Login';
    return axiosCommunity.post(url, params);
  },
};
