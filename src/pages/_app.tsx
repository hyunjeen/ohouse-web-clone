import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/store/storeConfig';
import PagePathMiddleware from '@/middleware/PagePath.middleware';
import Layout from '@/components/layout/Layout';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { noToSansKr } from '@/styles/font';
import '@/config/axios.config';
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_KEY as string}
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
    </>
  );
}
