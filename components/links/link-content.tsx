import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export interface LinkContentProps {
    text: string;
    icon?: IconDefinition;
}

export function LinkContent(props: LinkContentProps): JSX.Element {
    return (
        <>
            {props.icon && <FontAwesomeIcon icon={props.icon} />}
            <span>{props.text}</span>
        </>
    );
}
