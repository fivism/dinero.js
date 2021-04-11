import { createDinero } from '@dinero.js/core';
import {
  down,
  add,
  compare,
  decrement,
  divide,
  increment,
  isOfType,
  modulo,
  multiply,
  percentage,
  power,
  subtract,
  zero,
} from '@dinero.js/calculator/number';

/**
 * Create a Dinero object.
 *
 * @param options.amount The amount in minor currency units.
 * @param options.currency The currency.
 * @param options.scale The number of decimal places to represent.
 *
 * @returns The created Dinero object.
 */
export const dinero = createDinero({
  calculator: {
    round: down,
    add,
    compare,
    decrement,
    divide,
    increment,
    isOfType,
    modulo,
    multiply,
    percentage,
    power,
    subtract,
    zero,
  }
});
