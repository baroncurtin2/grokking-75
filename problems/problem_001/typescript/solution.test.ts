import { kidsWithCandies } from './solution';
import { test, expect, describe } from 'bun:test';

describe('kidsWithCandies', () => {
    type Test = {
        candies: number[];
        extraCandies: number;
        expected: boolean[];
    };

    const tests: Test[] = [
        {
            candies: [7, 3, 9, 2, 4],
            extraCandies: 5,
            expected: [true, false, true, false, true],
        },
        {
            candies: [5, 8, 6, 4, 2],
            extraCandies: 3,
            expected: [true, true, true, false, false],
        },
        {
            candies: [1, 2, 3, 4, 5],
            extraCandies: 4,
            expected: [true, true, true, true, true],
        },
        { candies: [], extraCandies: 5, expected: [] },
        {
            candies: [10, 20, 30],
            extraCandies: 10,
            expected: [false, true, true],
        },
    ];

    test.each(tests)(
        'for candies = %p and extraCandies = %d, should return %p',
        (test: Test) => {
            const { candies, extraCandies, expected } = test;
            expect(kidsWithCandies(candies, extraCandies)).toEqual(expected);
        }
    );
});
