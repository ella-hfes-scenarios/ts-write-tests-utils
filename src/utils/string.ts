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
 * @example slugify("Hello World!") => "hello-world"
 */
export function slugify(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Truncates a string to a maximum length, appending a suffix if truncated.
 * The total length including suffix should not exceed maxLength.
 *
 * @example truncate("Hello World", 8) => "Hello..."
 */
export function truncate(str: string, maxLength: number, suffix: string = '...'): string {
  if (!str) return '';
  if (maxLength <= 0) return '';
  if (str.length < maxLength) return str;
  const truncatedLength = maxLength - suffix.length;
  if (truncatedLength <= 0) return suffix.slice(0, maxLength);
  return str.slice(0, truncatedLength) + suffix;
}

/**
 * Converts a camelCase or PascalCase string to kebab-case.
 *
 * @example camelToKebab("getElementById") => "get-element-by-id"
 */
export function camelToKebab(str: string): string {
  if (!str) return '';
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}
