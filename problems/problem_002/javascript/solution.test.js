import { romanToInt } from './solution';
import { test, expect, describe } from 'bun:test';

describe('romanToInt', () => {
    const tests = [
        ['XLII', 42],
        ['CXCIV', 194],
        ['MMMCDXLIV', 3444],
    ];

    test.each(tests)(
        'for roman string = %s, should return %d',
        (romanValue, expected) => {
            expect(romanToInt(romanValue)).toEqual(expected);
        }
    );
});
