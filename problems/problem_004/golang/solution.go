package problem_004

import "strings"

func zigzagConversion(s string, numRows int) string {
	if numRows == 1 {
		return s
	}

	rows := make([]strings.Builder, numRows)
	currentRow := 0
	traverseDown := false

	for _, c := range s {
		rows[currentRow].WriteRune(c)

		if currentRow == 0 || currentRow == numRows - 1 {
			traverseDown = !traverseDown
		}

		if traverseDown {
			currentRow++
		} else {
			currentRow--
		}
	}

	var result strings.Builder
	for _, row := range rows {
		result.WriteString(row.String())
	}

	return result.String()
}