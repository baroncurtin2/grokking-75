export function romanToInt(s) {
    const mapping = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        const char = s[i];
        let value = mapping[char];

        if (i < n - 1 && value < mapping[s[i + 1]]) {
            result -= value;
        } else {
            result += value;
        }
    }

    return result;
}
