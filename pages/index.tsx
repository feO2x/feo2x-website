import React from 'react';
import Head from 'next/head';

export default function Home(): JSX.Element {
    return (
        <div>
            <Head>
                <title>feO2x.com</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>Hello World!</div>
        </div>
    );
}
