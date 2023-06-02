import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store/storeConfig";
import PagePathMiddleware from "@/middleware/PagePath.middleware";
import Layout from "@/layout/Layout";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { noToSansKr } from "@/styles/font";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
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
      <style jsx global>{`
        html {
          font-family: ${noToSansKr.style.fontFamily};
        }
      `}</style>
      ;
    </>
  );
}
