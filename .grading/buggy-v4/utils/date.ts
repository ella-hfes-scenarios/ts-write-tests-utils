// BUGGY-V4: isBusinessDay doesn't exclude Saturday
export function parseDate(input: string): Date | null {
  if (!input || typeof input !== 'string') return null;
  const trimmed = input.trim();

  const isoDate = new Date(trimmed);
  if (!isNaN(isoDate.getTime()) && trimmed.includes('-')) {
    return isoDate;
  }

  const usMatch = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (usMatch) {
    const [, month, day, year] = usMatch;
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    if (!isNaN(date.getTime())) return date;
  }

  const euMatch = trimmed.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (euMatch) {
    const [, day, month, year] = euMatch;
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    if (!isNaN(date.getTime())) return date;
  }

  const naturalMatch = trimmed.match(
    /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})$/i
  );
  if (naturalMatch) {
    const parsed = new Date(trimmed);
    if (!isNaN(parsed.getTime())) return parsed;
  }

  return null;
}

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
    return 'just now';
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

// BUG: only excludes Sunday, not Saturday
export function isBusinessDay(date: Date): boolean {
  const day = date.getDay();
  return day !== 0;
}
