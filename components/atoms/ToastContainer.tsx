import React, { ComponentType, FC } from 'react';
import { DefaultToastContainer, ToastProps } from 'react-toast-notifications';
import { ErrorIcon, SuccessIcon } from '../assets/SvgIcons';

const ToastContainer = (props: any) => (
  <DefaultToastContainer
    className="toast-container"
    // css={{ outline: "4px dashed green" }}

    {...props}
  />
);

export default ToastContainer;

export const MyCustomToast: ComponentType<ToastProps> | undefined = ({
  appearance,
  children,
}) => (
  <div
    className={`${
      appearance === 'error' ? 'bg-red-500' : 'bg-green-500'
    } text-white  rounded-lg py-3 px-6`}
  >
    <div className="flex items-center space-x-4">
      <div>{appearance === 'error' ? <ErrorIcon /> : <SuccessIcon />}</div>
      <div>{children}</div>
    </div>
  </div>
);
