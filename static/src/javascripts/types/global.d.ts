declare let __webpack_public_path__: string;

declare let twttr: {
    widgets?: {
        load?: (arg0: Element | null | undefined) => void;
    };
};

// #? TODO: this type def conflates definitions for CommonJS require and Webpack's require
// When we replace Webpack's require with dynamic imports, we can remove this type def
// https://webpack.js.org/guides/code-splitting/#dynamic-imports
declare let require: {
    ensure(ids: Array<string>, callback?: {}, chunkName?: string): void;
    resolve: (id: string) => string;
    cache: any;
    main: typeof module;
};

declare type TagAtrribute = {
    name: string;
    value: string;
};

declare type ThirdPartyTag = {
    shouldRun: boolean;
    url?: string;
    name?: string;
    onLoad?: () => any;
    beforeLoad?: () => any;
    useImage?: boolean;
    attrs?: Array<TagAtrribute>;
    async?: boolean;
    loaded?: boolean;
    insertSnippet?: () => any;
};

declare let jsdom: {
    reconfigure: (settings: {}) => any;
};