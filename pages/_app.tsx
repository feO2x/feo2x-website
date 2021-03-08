import React from 'react';
import type { AppProps } from 'next/app';
import { Header } from 'components';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <div>
            <Header />
            <Component {...pageProps} />
        </div>
    );
}


