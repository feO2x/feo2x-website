import React from 'react';
import { Logo } from './logo';
import { Menu } from './menu';

export function Header(): JSX.Element {
    return (
        <header>
            <div id='header-container'>
                <Logo />
                <Menu />
            </div>
        </header>
    );
}
