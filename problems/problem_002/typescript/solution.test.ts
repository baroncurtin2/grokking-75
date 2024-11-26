import { romanToInt } from './solution';
import { test, expect, describe } from 'bun:test';

describe('romanToInt', () => {
    type Test = [string, number];

    const tests: Test[] = [
        ['XLII', 42],
        ['CXCIV', 194],
        ['MMMCDXLIV', 3444],
    ];

    test.each(tests)(
        'for roman string = %s, should return %d',
        (s, expected) => {
            expect(romanToInt(s)).toEqual(expected);
        }
    );
});
