export function isEmail(str: string): boolean {
  if (!str || typeof str !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str.trim());
}

export function isStrongPassword(str: string): boolean {
  if (!str || str.length < 8) return false;
  const hasUpper = /[A-Z]/.test(str);
  const hasLower = /[a-z]/.test(str);
  const hasDigit = /\d/.test(str);
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{}|;:',.<>?\/]/.test(str);
  return hasUpper && hasLower && hasDigit && hasSpecial;
}

export function sanitizeInput(str: string): string {
  if (!str) return '';
  return str
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
