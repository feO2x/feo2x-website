import { LinkProps } from './link-props';
import React from 'react';
import { LinkContent } from './link-content';

export function ExternalLink(props: LinkProps): JSX.Element {

    return (
        <a
            href={props.href}
            target='_blank'
            rel='noreferrer noopener nofollow'
        >
            <LinkContent
                text={props.text}
                icon={props.icon}
            />
        </a>
    );
}
