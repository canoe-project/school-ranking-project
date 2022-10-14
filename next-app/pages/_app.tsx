import type { Session } from 'next-auth';
// eslint-disable-next-line import/order
import { SessionProvider } from 'next-auth/react';

import './styles.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from 'store/store';

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
