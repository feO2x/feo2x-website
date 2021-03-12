import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export interface MenuButtonProps {
    isExpandableMenuVisible: boolean;
    toggleExpandableMenuVisibility: () => void;
}

export function MenuButton(props: MenuButtonProps): JSX.Element {

    return (
        <button
            id='header-menu-button'
            type='button'
            onClick={props.toggleExpandableMenuVisibility}
        >
            <FontAwesomeIcon icon={props.isExpandableMenuVisible ? faTimes : faBars} />
        </button>
    );
}
