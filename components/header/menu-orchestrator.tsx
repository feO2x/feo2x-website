import React from 'react';
import { InlineMenu } from './inline-menu';
import { MenuButton, MenuButtonProps } from './menu-button';

export interface MenuProps extends MenuButtonProps {
    isInlineMenuActive: boolean;
}

export function MenuOrchestrator(props: MenuProps): JSX.Element {

    return (
        <>
            {
                props.isInlineMenuActive &&
                <InlineMenu />
            }
            {
                !props.isInlineMenuActive &&
                <MenuButton
                    isExpandableMenuVisible={props.isExpandableMenuVisible}
                    toggleExpandableMenuVisibility={props.toggleExpandableMenuVisibility}
                />
            }
        </>
    );
}
