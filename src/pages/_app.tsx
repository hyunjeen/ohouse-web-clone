import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppContext, AppProps } from "next/app";
import { Noto_Sans_KR } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store/storeConfig";
import PagePathMiddleware from "@/middleware/PagePath.middleware";
import Layout from "@/layout/Layout";
import { GoogleOAuthProvider } from "@react-oauth/google";
config.autoAddCss = false;

const noToSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <style jsx global>{`
        html {
          font-family: ${noToSansKr.style.fontFamily};
        }
      `}</style>
      <PersistGate loading={null} persistor={persistor}>
        <GoogleOAuthProvider
          clientId={
            "827825074660-en7jqfletrlq21bilafn0g1fme3i4du1.apps.googleusercontent.com"
          }
        >
          <PagePathMiddleware>
            <Layout pathname={pageProps?.pathname}>
              <Component {...pageProps} />
            </Layout>
          </PagePathMiddleware>
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  );
}
App.getInitialProps = async (context: AppContext) => {
  const { ctx, Component } = context;
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = (await Component.getInitialProps(ctx)) || {};
    console.log(pageProps);
    return { pageProps };
  }
  return {};
};
