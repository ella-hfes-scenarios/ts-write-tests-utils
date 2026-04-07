/**
 * Validates an email address format.
 * Requirements:
 * - Must contain exactly one @
 * - Local part must be non-empty
 * - Domain must contain at least one dot
 * - Domain parts must be non-empty
 */
export function isEmail(str: string): boolean {
  if (!str || typeof str !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str.trim());
}

/**
 * Checks if a password meets strength requirements:
 * - At least 8 characters
 * - At least one uppercase letter
 * - At least one lowercase letter
 * - At least one digit
 * - At least one special character (!@#$%^&*()_+-=[]{}|;:',.<>?/)
 */
export function isStrongPassword(str: string): boolean {
  if (!str || str.length < 8) return false;
  const hasUpper = /[A-Z]/.test(str);
  const hasLower = /[a-z]/.test(str);
  const hasDigit = /\d/.test(str);
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{}|;:',.<>?\/]/.test(str);
  return hasUpper && hasLower && hasDigit && hasSpecial;
}

/**
 * Sanitizes user input by:
 * - Removing HTML tags
 * - Trimming whitespace
 * - Collapsing multiple spaces into one
 */
export function sanitizeInput(str: string): string {
  if (!str) return '';
  return str
    .replace(/<[^>]*>/g, '')      // Remove HTML tags
    .replace(/\s+/g, ' ')         // Collapse whitespace
    .trim();
}
