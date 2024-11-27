export function zigzagConversion(s, numRows) {
    if (numRows === 1) return s;

    const result = new Array(numRows).fill('');
    let currentRow = 0;
    let traverseDown = false;

    for (let char of s) {
        result[currentRow] += char;

        if (currentRow === 0 || currentRow === numRows - 1) {
            traverseDown = !traverseDown;
        }

        // move to next row based on direction
        currentRow += traverseDown ? 1 : -1;
    }

    return result.join('');
}
