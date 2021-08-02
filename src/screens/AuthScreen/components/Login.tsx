import {Block, InputAuth, MainRadialGradient} from 'components';
import React from 'react';

export const Login = () => {
  return (
    <MainRadialGradient>
      <Block marginHorizontal={18} marginTop={24}>
        <InputAuth placeholder="Số điện thoại hoặc email" marginBottom={16} />
        <InputAuth placeholder="Mật khẩu" secureTextEntry />
      </Block>
    </MainRadialGradient>
  );
};
