// Bundle entry point for Molstar
// This file imports Molstar and exposes it globally for the webview

import * as Molstar from 'molstar';

// Expose Molstar globally for webview.html
if (typeof window !== 'undefined') {
    window.molstar = Molstar;
}

// Also export as default for webpack
export default Molstar;

