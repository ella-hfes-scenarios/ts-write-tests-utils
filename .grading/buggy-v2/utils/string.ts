// BUGGY-V2: truncate off-by-one
export function capitalize(str: string): string {
  if (!str) return '';
  return str.split(' ').map((word) => {
    if (word.length === 0) return '';
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

export function slugify(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s-]+/g, '-')       // fixed
    .replace(/^-+|-+$/g, '');
}

export function truncate(str: string, maxLength: number, suffix: string = '...'): string {
  if (!str) return '';
  if (maxLength <= 0) return '';
  if (str.length < maxLength) return str;  // BUG: < instead of <=
  const truncatedLength = maxLength - suffix.length;
  if (truncatedLength <= 0) return suffix.slice(0, maxLength);
  return str.slice(0, truncatedLength) + suffix;
}

export function camelToKebab(str: string): string {
  if (!str) return '';
  return str
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')  // fixed
    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
    .toLowerCase();
}
