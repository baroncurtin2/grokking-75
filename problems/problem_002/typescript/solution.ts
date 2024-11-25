export function romanToInt(s: string): number {
    const mapping: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    const n: number = s.length;
    const splitString: string[] = s.split('');
    return splitString.reduce((result, char, i) => {
        const value: number = mapping[char];
        if (i < n - 1 && value < mapping[s[i + 1]]) {
            result -= value;
        } else {
            result += value;
        }

        return result;
    }, 0);
}
