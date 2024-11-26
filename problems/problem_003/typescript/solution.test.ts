import { bestTimeToBuyAndSell } from './solution';
import { test, expect, describe } from 'bun:test';

describe('bestTimeToBuyAndSell', () => {
    type Test = [number[], number];

    const tests: Test[] = [
        [[3, 2, 6, 5, 0, 3], 4],
        [[8, 6, 5, 2, 1], 0],
        [[1, 2], 1],
    ];

    test.each(tests)(
        'for prices = %p, should return %d',
        (prices, expected) => {
            expect(bestTimeToBuyAndSell(prices)).toEqual(expected);
        }
    );
});
