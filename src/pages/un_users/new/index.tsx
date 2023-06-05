import RegisterForm from '@/components/modules/auth/RegisterForm';

function Index() {
  return (
    <section className={'h-[100vh] w-full'}>
      <RegisterForm />
    </section>
  );
}

Index.getInitialProps = async (ctx: { pathname: string }) => {
  const pathname = ctx.pathname;
  return { pathname };
};
export default Index;
