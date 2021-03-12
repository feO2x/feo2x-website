import React from 'react';
import { MenuLinks } from './menu-links';

export function InlineMenu(): JSX.Element {
    return (
        <div
            id='inline-menu'
            className='menu-container'
        >
            <MenuLinks />
        </div>
    );
}
