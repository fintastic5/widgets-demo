// Shared math for circular progress rings.
// Circumference and stroke-dashoffset for a given percentage.
export function ringCircumference(radius) {
  return 2 * Math.PI * radius;
}

export function ringOffset(radius, pct) {
  const c = ringCircumference(radius);
  return c - (Math.max(0, Math.min(100, pct)) / 100) * c;
}
