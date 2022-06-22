import React, { FC, useState } from 'react';
import { FInputs } from '../atoms/Inputs';
import AuthLayout from '../layout/AuthLayout';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { makeRequest } from '../lib/api';
import { useToasts } from 'react-toast-notifications';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import Spin from '../assets/SvgIcons';

type ILogin = {
  email: string;
  password: string;
};
const Login: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  // schema
  const schema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email('Enter a valid email address')
        .required('This is Required'),
      password: yup
        .string()
        .required('This is Required')
        .min(6, 'Password is too short - should be 6 chars minimum.'),
    })
    .required();

  const methods = useForm<ILogin>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { handleSubmit } = methods;

  const { addToast } = useToasts();
  const { push } = useRouter();

  const onFinish: SubmitHandler<ILogin> = async (data) => {
    try {
      setLoading(true);
      const response = await makeRequest('/user/login', 'POST', data);
      if (!isEmpty(response)) {
        setLoading(false);
        addToast('Login successfully... Procced to dashboard!', {
          appearance: 'success',
        });
        document.cookie = `id=${response._id}`;
        localStorage.setItem('t_name', response.fullName);
        push('/dashboard');
      }
    } catch (err: any) {
      if (!isEmpty(err.response.data.message)) {
        setLoading(false);
        addToast(err.response.data.message, {
          appearance: 'error',
        });
      }
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-1 justify-center mt-10 lg:mt-0 items-center w-full h-full">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onFinish)} className="w-full ">
            <h1 className="font-bold text-3xl text-center lg:text-left lg:text-4xl my-8">
              Login
            </h1>
            <div className="space-y-4">
              <FInputs
                type="email"
                label="Email Address"
                placeholder="Enter your email address"
                name="email"
              />
              <FInputs
                type="password"
                label="Password"
                placeholder="Enter Password"
                name="password"
              />
            </div>

            <div className="my-12">
              <button className="w-full flex items-center justify-center text-white py-3 px-5 rounded-lg bg-primary-100 ">
                {loading && <Spin />} {loading ? 'Proccessing...' : 'Login'}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </AuthLayout>
  );
};

export default Login;
