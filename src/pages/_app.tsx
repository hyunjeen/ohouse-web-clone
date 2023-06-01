import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/layout/Layout";
import { Noto_Sans_KR } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store/storeConfig";
import PagePathMiddleware from "@/middleware/PagePath.middleware";

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
        <PagePathMiddleware>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PagePathMiddleware>
      </PersistGate>
    </Provider>
  );
}
