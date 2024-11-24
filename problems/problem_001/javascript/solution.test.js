import { kidsWithCandies } from './solution';
import { test, expect, describe } from 'bun:test';

describe('kidsWithCandies', () => {
    test.each([
        [[7, 3, 9, 2, 4], 5, [true, false, true, false, true]],
        [[5, 8, 6, 4, 2], 3, [true, true, true, false, false]],
        [[1, 2, 3, 4, 5], 4, [true, true, true, true, true]],
        [[], 5, []],  // Edge case for empty array
        [[10, 20, 30], 10, [false, true, true]],
    ])(
        'for candies = %p and extraCandies = %d, should return %p',
        (candies, extraCandies, expected) => {
            expect(kidsWithCandies(candies, extraCandies)).toEqual(expected);
        }
    );
});
