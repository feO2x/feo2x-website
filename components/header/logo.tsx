import React from 'react';
import Link from 'next/link';

export function Logo(): JSX.Element {
    return (
        <Link href='/'>
            <a id='logo-container'>
                <img
                    id='logo-image'
                    src='/images/logo.jpg'
                    alt='feO2x Logo'
                />
                <span>feO2x</span>
            </a>
        </Link>
    );
}
