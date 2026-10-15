// vitest-axe ships its matcher types for the legacy `Vi` namespace;
// register them on the current `vitest` module instead.
import type { AxeMatchers } from 'vitest-axe/matchers'

declare module 'vitest' {
  interface Assertion<T = any> extends AxeMatchers {}
  interface AsymmetricMatchersContaining extends AxeMatchers {}
}
