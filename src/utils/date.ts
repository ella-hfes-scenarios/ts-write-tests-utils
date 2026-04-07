/**
 * Parses various date string formats into a Date object.
 * Supports: ISO 8601, US format (MM/DD/YYYY), European (DD.MM.YYYY), and natural ("January 15, 2024")
 *
 * @returns Date object or null if parsing fails
 */
export function parseDate(input: string): Date | null {
  if (!input || typeof input !== 'string') return null;
  const trimmed = input.trim();

  // ISO 8601
  const isoDate = new Date(trimmed);
  if (!isNaN(isoDate.getTime()) && trimmed.includes('-')) {
    return isoDate;
  }

  // US format: MM/DD/YYYY
  const usMatch = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (usMatch) {
    const [, month, day, year] = usMatch;
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    if (!isNaN(date.getTime())) return date;
  }

  // European format: DD.MM.YYYY
  const euMatch = trimmed.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (euMatch) {
    const [, day, month, year] = euMatch;
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    if (!isNaN(date.getTime())) return date;
  }

  // Natural format: "Month DD, YYYY"
  const naturalMatch = trimmed.match(
    /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})$/i
  );
  if (naturalMatch) {
    const parsed = new Date(trimmed);
    if (!isNaN(parsed.getTime())) return parsed;
  }

  return null;
}

/**
 * Formats a date relative to now.
 * @example formatRelative(new Date(Date.now() - 3600000)) => "1 hour ago"
 */
export function formatRelative(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const absDiffMs = Math.abs(diffMs);
  const isPast = diffMs > 0;

  const seconds = Math.floor(absDiffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let result: string;
  if (seconds < 60) {
    result = 'just now';
    return result;
  } else if (minutes < 60) {
    result = `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  } else if (hours < 24) {
    result = `${hours} hour${hours !== 1 ? 's' : ''}`;
  } else if (days < 30) {
    result = `${days} day${days !== 1 ? 's' : ''}`;
  } else {
    const months = Math.floor(days / 30);
    result = `${months} month${months !== 1 ? 's' : ''}`;
  }

  return isPast ? `${result} ago` : `in ${result}`;
}

/**
 * Checks if a given date falls on a business day (Monday through Friday).
 */
export function isBusinessDay(date: Date): boolean {
  const day = date.getDay();
  return day !== 0;
}
