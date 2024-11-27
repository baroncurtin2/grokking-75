import { zigzagConversion } from './solution';
import { test, describe, expect } from 'bun:test';

describe('zigagConversion', () => {
    type zigzagConverionTest = [string, number, string];

    const tests: zigzagConverionTest[] = [
        ['HELLOPROGRAMMING', 4, 'HRMEPOMILOGANLRG'],
        ['PROBLEMCHALLENGE', 5, 'PHRCAEOMLGBELNLE'],
        ['ABCDE', 2, 'ACEBD'],
    ];

    test.each(tests)(
        'for s = %s, numRows = %d, should return %s',
        (s: string, numRows: number, expected: string) => {
            expect(zigzagConversion(s, numRows)).toEqual(expected);
        }
    );
});
