export const isRunningInBrowser = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);
