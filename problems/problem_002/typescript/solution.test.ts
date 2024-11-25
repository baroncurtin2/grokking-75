import { romanToInt } from './solution';
import { test, expect, describe } from 'bun:test';


describe('romanToInt', () => {
    type Test = {
        s: string;
        expected: number;
    }

    const tests: Test[] = [
        {s: 'XLII', expected: 42},
        {s: 'CXCIV', expected: 194},
        {s: 'MMMCDXLIV', expected: 3444},
    ];

    test.each(tests)(
        'for roman string = %s, should return %d',
        (test: Test) => {
            const {s, expected } = test;
            expect(romanToInt(s)).toEqual(expected);
        }
    );
});