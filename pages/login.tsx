import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Login from '../components/auth/Login';

const login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Techinnover - Login</title>
      </Head>
      <Login />
    </>
  );
};

export default login;
