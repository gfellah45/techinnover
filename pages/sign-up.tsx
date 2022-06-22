import React from 'react';
import Head from 'next/head';
import SignUp from '../components/auth/SignUp';

const signup = () => {
  return (
    <>
      <Head>
        <title>Techinnover - SignUp</title>
      </Head>
      <SignUp />
    </>
  );
};

export default signup;
