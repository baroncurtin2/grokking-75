import { zigzagConversion } from './solution';
import { test, describe, expect } from 'bun:test';

describe('zigagConversion', () => {
    const tests = [
        ['HELLOPROGRAMMING', 4, 'HRMEPOMILOGANLRG'],
        ['PROBLEMCHALLENGE', 5, 'PHRCAEOMLGBELNLE'],
        ['ABCDE', 2, 'ACEBD'],
    ];

    test.each(tests)(
        'for s = %s, numRows = %d, should return %s',
        (s, numRows, expected) => {
            expect(zigzagConversion(s, numRows)).toEqual(expected);
        }
    );
});
