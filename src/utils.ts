import { formatReplacementString } from 'platform-bible-utils';

/**
 * Get the name of the web view based on the name of the project
 *
 * @param titleStringFormat String with `{resourceName}` in it to be replaced with the short name of
 *   the resource e.g. `Website Viewer: {resourceName}`
 * @param resourceName Should be the short name of the web resource
 * @returns Web view title
 */
export function getWebViewTitle(titleStringFormat: string, resourceName: string | undefined) {
  return formatReplacementString(titleStringFormat, { resourceName });
}
