import { faGithub, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { ExternalLink } from "components/links/external-link";
import { InternalLink } from "components/links/internal-link";
import React from "react";

export function MenuLinks(): JSX.Element {
    return (
        <>
            <InternalLink
                href='/about'
                text='About'
                icon={faAddressCard}
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
        </>
    );
}
