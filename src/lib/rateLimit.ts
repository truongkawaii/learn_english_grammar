// In-memory rolling-window rate limiter.
// Survives page session, resets on reload. Suitable for Gemini API protection.

interface Bucket {
  limit: number;
  windowMs: number;
  hits: number[];  // unix timestamps
}

const buckets: Record<string, Bucket> = {};

export const configureRateLimit = (key: string, limit: number, windowMs: number) => {
  buckets[key] = { limit, windowMs, hits: [] };
};

/** Returns true if a new call is allowed; records the hit when so. */
export const tryAcquire = (key: string): boolean => {
  const b = buckets[key];
  if (!b) return true;  // unconfigured → unbounded
  const now = Date.now();
  b.hits = b.hits.filter((t) => now - t < b.windowMs);
  if (b.hits.length >= b.limit) return false;
  b.hits.push(now);
  return true;
};

export const getRemaining = (key: string): number => {
  const b = buckets[key];
  if (!b) return Infinity;
  const now = Date.now();
  b.hits = b.hits.filter((t) => now - t < b.windowMs);
  return Math.max(0, b.limit - b.hits.length);
};

export const getResetIn = (key: string): number => {
  const b = buckets[key];
  if (!b || b.hits.length === 0) return 0;
  const oldest = Math.min(...b.hits);
  return Math.max(0, b.windowMs - (Date.now() - oldest));
};

// Configure Gemini translate budget: 60 calls / hour.
configureRateLimit("gemini-translate", 60, 60 * 60 * 1000);
