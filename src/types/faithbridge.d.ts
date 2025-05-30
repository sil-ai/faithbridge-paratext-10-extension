declare module 'faithbridge' {}

declare module 'papi-shared-types' {
  export interface CommandHandlers {
    /**
     * Opens or updates a Website Viewer web view with the Faithbridge website and returns the web
     * view id
     *
     * @returns From return value of openWebView: Promise that resolves to the ID of the web view we
     *   got or undefined if the provider did not create a WebView for this request
     */
    'faithbridge.openFaithbridge': () => Promise<string | undefined>;

    // /**
    //  * Opens a browser window on the operating system with the url that the Website Viewer tab was
    //  * opened with in Platform.Bible
    //  *
    //  * Note: this command is intended to work from the web view menu
    //  *
    //  * @param webViewId The web view id of the current web view to look up the type and get the url,
    //  *   provided by the web view menu
    //  * @returns Promise of void
    //  */
    // 'faithbridge.openUrl': (webViewId: string) => Promise<void>;
  }
}
