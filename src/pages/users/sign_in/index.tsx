import React from 'react';
import LoginForm from '@/components/modules/auth/login/LoginForm';

function Index() {
  return (
    <section className={'h-[100vh] w-full'}>
      <LoginForm />
    </section>
  );
}

Index.getInitialProps = async (ctx: { pathname: string }) => {
  const pathname = ctx.pathname;
  return { pathname };
};

export default Index;
