package problem_001

import "slices"

func kidsWithGreatestNumberOfCandies(candies []int, extraCandies int) []bool {
	result := make([]bool, len(candies))
	maxCandies := slices.Max(candies)

	for i, v := range candies {
		result[i] = v + extraCandies >= maxCandies
	}

	return result
}