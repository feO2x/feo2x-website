import { useMediaQuery, useStateAndRef } from 'hooks';
import React, { useCallback, useEffect } from 'react';
import { Logo } from './logo';
import { MenuOrchestrator } from './menu-orchestrator';
import { ExpandableMenu } from './expandable-menu';
import { MediaQueryAllQueryable } from 'react-responsive';

const query: Partial<MediaQueryAllQueryable> = { minWidth: 700 };

export function Header(): JSX.Element {

    const is700PixelsOrGreater = useMediaQuery(query);
    const [isExpandableMenuVisible, setIsExpandableMenuVisible, reference] = useStateAndRef(false);
    const toggleExpandableMenuVisibility = useCallback(
        () => setIsExpandableMenuVisible(!reference.current),
        [reference, setIsExpandableMenuVisible]
    );

    useEffect(
        () => {
            if (is700PixelsOrGreater)
                setIsExpandableMenuVisible(false);
        },
        [is700PixelsOrGreater, setIsExpandableMenuVisible]
    );

    return (
        <header>
            <div id='header-container'>
                <Logo />
                <MenuOrchestrator
                    isInlineMenuActive={is700PixelsOrGreater}
                    isExpandableMenuVisible={isExpandableMenuVisible}
                    toggleExpandableMenuVisibility={toggleExpandableMenuVisibility}
                />

            </div>
            {
                isExpandableMenuVisible &&
                <ExpandableMenu />
            }
        </header>
    );
}
