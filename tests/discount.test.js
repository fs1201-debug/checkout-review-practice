import assert from 'node:assert/strict';
import test from 'node:test';
import { applyDiscount } from '../src/discount.js';

test('returns the original subtotal below the discount threshold', () => {
  assert.equal(applyDiscount(0), 0);
  assert.equal(applyDiscount(49.99), 49.99);
});

test('applies a 10% discount to a subtotal of $50', () => {
  assert.equal(applyDiscount(50), 45);
});

test('applies a 10% discount to a subtotal of $100', () => {
  assert.equal(applyDiscount(100), 90);
});

test('applies a 10% discount to a subtotal of $200', () => {
  assert.equal(applyDiscount(200), 180);
});
