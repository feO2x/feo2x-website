import React from 'react';
import { faYoutube, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { ExternalLink } from 'components/links/external-link';
import { InternalLink } from 'components/links/internal-link';

export function Menu(): JSX.Element {
    return (
        <div id='menu-container'>
            <InternalLink
                href='/about'
                icon={faAddressCard}
                text='About'
            />
            <ExternalLink
                href='https://twitter.com/feO2x'
                icon={faTwitter}
                text='Twitter'
            />
            <ExternalLink
                href='https://github.com/feO2x'
                icon={faGithub}
                text='GitHub'
            />
            <ExternalLink
                href='https://youtube.com/c/kennypflug/'
                icon={faYoutube}
                text='YouTube'
            />
        </div>
    );
}
