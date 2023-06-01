import RegisterForm from "@/components/modules/auth/RegisterForm";

function Index() {
  return (
    <section className={"w-full h-[100vh]"}>
      <RegisterForm />
    </section>
  );
}

Index.getInitialProps = async (ctx: { pathname: string }) => {
  const pathname = ctx.pathname;
  return { pathname };
};
export default Index;
