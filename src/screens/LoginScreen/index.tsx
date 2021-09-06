import React from 'react';
import { Notification } from '../../components/Notification';
import './LoginScreen.scss';
export const LoginScreen = () => {
  return (
    <div id='login-screen'>
      <Notification
        type='success'
        message='Truong thanh huy'
        duration={100000000}
      />
    </div>
  );
};
