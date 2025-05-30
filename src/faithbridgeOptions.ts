import { SerializedVerseRef } from '@sillsdev/scripture';
import type { CommandHandlers } from 'papi-shared-types';

export enum RefChange {
    DoNotWatch,
    WatchBookChange,
    WatchChapterChange,
    WatchVerseChange,
}
export interface FaithbridgeOptions {
    getUrl: (scrRef: SerializedVerseRef, interfaceLanguage: string[]) => string;
    // TODO: could be improved by passing in another parameter with the selected text of the active tab
    // (e.g. for a lexicon or Marble to scroll to / highlight a word)
    // for demo purpose this text could for now come from a setting, where users can copy it into
    // alternatively an input on the main toolbar - if extensions can do a thing like adding controls to the main toolbar
    websiteName: string;
    watchRefChange: RefChange;
}

// satisfy typescript, although we do not expect these to appear
export const DEFAULT_FAITHBRIDGE_OPTIONS: FaithbridgeOptions = {
    getUrl: () => '',
    websiteName: '',
    watchRefChange: RefChange.DoNotWatch,
};

export function getWebsiteOptions(): Map<keyof CommandHandlers, FaithbridgeOptions> {
    const faithbridgeOptions: FaithbridgeOptions = {
        getUrl: (_scrRef: SerializedVerseRef) => {
            return 'https://faithbridge.multilingualai.com/bible-well'
        },
        websiteName: 'Faithbridge',
        watchRefChange: RefChange.WatchVerseChange,
    };

    return new Map<keyof CommandHandlers, FaithbridgeOptions>([
        ['faithbridge.openFaithbridge', faithbridgeOptions],
    ]);
}
