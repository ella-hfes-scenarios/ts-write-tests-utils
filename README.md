# Utility Library Test-Writing Challenge

## Background

You've joined a team that built a utility library but never wrote tests. The library contains string manipulation, date utilities, and validation functions used across multiple services.

Your job is to write a comprehensive test suite that:
1. Verifies all functions work correctly for expected inputs
2. Covers edge cases and boundary conditions
3. Catches any bugs lurking in the code

## Your Task

Write tests in `tests/visible/` that thoroughly cover all functions in:

- `src/utils/string.ts` — String manipulation utilities
- `src/utils/date.ts` — Date parsing and formatting utilities
- `src/utils/validation.ts` — Input validation utilities

## Getting Started

```bash
npm install
npm test          # Run your tests
```

## Source Files

### `src/utils/string.ts`
- `capitalize(str)` — Capitalizes the first letter of each word
- `slugify(str)` — Converts a string to a URL-friendly slug
- `truncate(str, maxLength, suffix?)` — Truncates a string to maxLength (including suffix)
- `camelToKebab(str)` — Converts camelCase to kebab-case

### `src/utils/date.ts`
- `parseDate(input)` — Parses various date string formats into a Date object
- `formatRelative(date)` — Formats a date relative to now ("2 hours ago", "in 3 days")
- `isBusinessDay(date)` — Checks if a date falls on a weekday (Mon-Fri)

### `src/utils/validation.ts`
- `isEmail(str)` — Validates email format
- `isStrongPassword(str)` — Checks password strength requirements
- `sanitizeInput(str)` — Removes HTML tags and trims whitespace

## Tips

- Read the source code carefully before writing tests
- Think about edge cases: empty strings, special characters, boundary values
- Consider what could go wrong with each function
- Your tests should be specific enough to catch real bugs, not just confirm happy paths
