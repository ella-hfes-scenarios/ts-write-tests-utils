/**
 * Capitalizes the first letter of each word in a string.
 * @example capitalize("hello world") => "Hello World"
 */
export function capitalize(str: string): string {
  if (!str) return '';
  return str
    .split(' ')
    .map((word) => {
      if (word.length === 0) return '';
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

/**
 * Converts a string to a URL-friendly slug.
 * - Lowercases everything
 * - Replaces spaces and special characters with hyphens
 * - Removes consecutive hyphens
 * - Trims leading/trailing hyphens
 *
 * BUG: Doesn't handle consecutive spaces properly — they produce consecutive hyphens
 * that aren't collapsed because the replace only targets the original characters.
 *
 * @example slugify("Hello World!") => "hello-world"
 */
export function slugify(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')  // remove special chars
    .replace(/\s/g, '-')            // replace each space with hyphen (BUG: consecutive spaces = consecutive hyphens)
    .replace(/^-+|-+$/g, '');       // trim leading/trailing hyphens but NOT consecutive internal ones
}

/**
 * Truncates a string to a maximum length, appending a suffix if truncated.
 * The total length including suffix should not exceed maxLength.
 *
 * BUG: Off-by-one — when str.length === maxLength, it still truncates
 * because it uses < instead of <=
 *
 * @example truncate("Hello World", 8) => "Hello..."
 */
export function truncate(str: string, maxLength: number, suffix: string = '...'): string {
  if (!str) return '';
  if (maxLength <= 0) return '';
  if (str.length < maxLength) return str;  // BUG: should be <= (off-by-one at boundary)
  const truncatedLength = maxLength - suffix.length;
  if (truncatedLength <= 0) return suffix.slice(0, maxLength);
  return str.slice(0, truncatedLength) + suffix;
}

/**
 * Converts a camelCase or PascalCase string to kebab-case.
 *
 * BUG: Fails on consecutive uppercase letters (acronyms).
 * "XMLParser" produces "x-m-l-parser" instead of "xml-parser"
 * "getElementById" works fine => "get-element-by-id"
 *
 * @example camelToKebab("getElementById") => "get-element-by-id"
 */
export function camelToKebab(str: string): string {
  if (!str) return '';
  return str
    .replace(/([A-Z])/g, '-$1')  // BUG: inserts hyphen before EVERY uppercase letter
    .toLowerCase()
    .replace(/^-/, '');           // remove leading hyphen if string started with uppercase
}
