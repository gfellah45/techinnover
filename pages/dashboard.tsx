import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

const Dashboard: NextPage = () => {
  const [user, setUser] = useState<string | null>('');

  useEffect(() => {
    setUser(localStorage.getItem('t_name'));
  }, []);
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="text-4xl font-bold text-center">
        Hello <span className="text-primary-100 uppercase">{user}</span> Welcome
        to Techinnover Educational Dashboard
      </div>
    </div>
  );
};

export default Dashboard;
