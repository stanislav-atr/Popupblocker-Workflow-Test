import { optionsApi } from './storage/Option';
import { OPTIONS_API_PROP } from './shared';
import { resourceEnv } from '../tasks/environment';

/**
 * Checks if current page is own options page
 *
 * @param context global context
 */
export function isOptionsPage(context: Window & typeof globalThis): boolean {
    const LOCAL_OPTIONS_URL_REGEX = /(localhost:|http:\/\/127\.0\.0\.1).*(\/options\.html)/;
    const OPTIONS_PAGE_URL = `https://popupblocker.adguard.com/${resourceEnv}/v1/options.html`;
    const GITHUB_PAGES_ALIAS = 'https://adguardteam.github.io/PopupBlocker/options.html';

    const { href } = context.location;
    return OPTIONS_PAGE_URL === href
        || GITHUB_PAGES_ALIAS === href
        // allow page debugging
        || LOCAL_OPTIONS_URL_REGEX.test(href);
}

/**
 * Exposes options api on options page.
 *
 * @param context global context
 */
export function exposeStorage(context: Window & typeof globalThis) {
    context[OPTIONS_API_PROP] = optionsApi;
}
