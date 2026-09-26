import assert from 'node:assert/strict';
import test from 'node:test';
import { applyDiscount } from '../src/discount.js';

test('returns the original subtotal', () => {
  assert.equal(applyDiscount(100), 100);
});
