export function zigzagConversion(s: string, numRows: number): string {
    if (numRows === 1) return s;

    const result: string[] = new Array(numRows).fill('');
    let currentRow: number = 0;
    let traverseDown: boolean = false;

    for (let char of s) {
        result[currentRow] += char;

        if (currentRow === 0 || currentRow === numRows - 1) {
            traverseDown = !traverseDown;
        }

        currentRow += traverseDown ? 1 : -1;
    }

    return result.join('');
}