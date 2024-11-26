package problem_002

import (
	"strings"
)

func romanToInteger(s string) int {
	// normalize input to uppercase
	s = strings.ToUpper(s)

	mapping := map[rune]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	result := 0
	n := len(s)

	runes := []rune(s)
	for i := 0; i < len(runes); i++ {
		current := runes[i]
		currentValue := mapping[current]

		if i < n-1 && currentValue < mapping[runes[i+1]] {
			result -= currentValue
		} else {
			result += currentValue
		}
	}

	return result
}
