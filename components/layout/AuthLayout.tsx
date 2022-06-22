import React, { FC } from 'react';

interface IProps {
  children: React.ReactNode;
}

const AuthLayout: FC<IProps> = ({ children }) => {
  return (
    <div className=" w-11/12 lg:w-[528px] mx-auto h-screen ">{children}</div>
  );
};

export default AuthLayout;
