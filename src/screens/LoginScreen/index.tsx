import React from 'react';
import { Notification } from '../../components/Notification';
import './LoginScreen.scss';
export const LoginScreen = () => {
  return (
    <div id='login-screen'>
      <Notification type='success' message='Update Teacher Successfully' />
      <Notification type='error' message='Update Teacher Successfully' />
      <Notification type='warning' message='Update Teacher Successfully' />
    </div>
  );
};
