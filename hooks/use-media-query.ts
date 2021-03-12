import { isRunningInBrowser } from 'environment';
import { MediaQueryAllQueryable, MediaQueryMatchers, useMediaQuery as useReactResponsiveMediaQuery } from "react-responsive";

const serverSideRenderingMatchers: MediaQueryMatchers = { width: 1000 };

export function useMediaQuery(query: Partial<MediaQueryAllQueryable>): boolean {
    return useReactResponsiveMediaQuery(query, isRunningInBrowser ? undefined : serverSideRenderingMatchers);
}
