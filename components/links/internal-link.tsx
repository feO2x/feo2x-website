import React from 'react';
import Link from 'next/link';
import { LinkContent } from './link-content';
import { LinkProps } from './link-props';

export function InternalLink(props: LinkProps): JSX.Element {
    return (
        <Link href={props.href}>
            <a>
                <LinkContent
                    text={props.text}
                    icon={props.icon}
                />
            </a>
        </Link>
    );
}
