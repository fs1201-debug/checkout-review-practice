export function applyDiscount(subtotal) {
  if (subtotal >= 50) {
    return subtotal * 0.9;
  }

  return subtotal;
}
