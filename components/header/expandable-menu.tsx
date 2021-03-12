import React from 'react';
import { MenuLinks } from './menu-links';

export function ExpandableMenu(): JSX.Element {
    return (
        <div
            id='expandable-menu'
            className='menu-container'
        >
            <MenuLinks />
        </div>
    );
}
