import React from 'react';
import './Notification.scss';
import className from 'classnames';
interface NotificationProps {
  type: 'error' | 'success' | 'warning';
  message: string;
  duration?: number;
}
export const Notification: React.FC<NotificationProps> = (props) => {
  const { type, message } = props;
  const [openState, setOpenState] = React.useState(true);
  const duration = props.duration || 3000;
  const successClassName = className(
    'notification d-flex flex-wrap notification--success'
  );
  const errorClassName = className(
    'notification d-flex flex-wrap notification--error'
  );
  const warningClassName = className(
    'notification d-flex flex-wrap notification--warning'
  );
  const turnOffNotification = () => {
    setOpenState(false);
  };
  setTimeout(() => {
    setOpenState(false);
  }, duration + 1000);
  const notificationClassName = (() => {
    if (openState)
      switch (type) {
        case 'success':
          return successClassName;
        case 'warning':
          return warningClassName;
        case 'error':
          return errorClassName;
        default:
          break;
      }
    return 'd-none';
  })();
  const renderIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-emoji-wink-fill'
            viewBox='0 0 16 16'
          >
            <path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 6.5C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5zM4.285 9.567a.5.5 0 0 0-.183.683A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75.5.5 0 0 0-.683-.183zm5.152-3.31a.5.5 0 0 0-.874.486c.33.595.958 1.007 1.687 1.007.73 0 1.356-.412 1.687-1.007a.5.5 0 0 0-.874-.486.934.934 0 0 1-.813.493.934.934 0 0 1-.813-.493z' />
          </svg>
        );
      case 'warning':
        return (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-emoji-expressionless-fill'
            viewBox='0 0 16 16'
          >
            <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm5 0h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm-5 4h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z' />
          </svg>
        );
      case 'error':
        return (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-emoji-frown-fill'
            viewBox='0 0 16 16'
          >
            <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z' />
          </svg>
        );
      default:
        return (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-emoji-frown-fill'
            viewBox='0 0 16 16'
          >
            <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z' />
          </svg>
        );
    }
  };

  return (
    <div id='toast'>
      <div
        style={{
          animation: `SlideInLeft ease 0.5s, fadeOut linear 1s ${
            duration / 1000
          }s forwards`,
        }}
        className={` ${notificationClassName}`}
      >
        <div className='notification__icon col-2 d-flex justify-content-center align-items-center'>
          {renderIcon()}
        </div>
        <div className='notification__body col-8'>
          <h3>
            {type == 'success'
              ? 'Success'
              : type === 'warning'
              ? 'Warning'
              : 'Error'}
          </h3>
          <p>{message}</p>
        </div>
        <div className='notification__exit col-2' onClick={turnOffNotification}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-x-lg'
            viewBox='0 0 16 16'
          >
            <path d='M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z' />
          </svg>
        </div>
      </div>
    </div>
  );
};
