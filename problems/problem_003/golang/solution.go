package problem_003

import "math"

func bestTimeToBuyAndSell(prices []int) int {
	if len(prices) < 2 {
		return 0
	}

	minPrice := math.MaxFloat64
	maxProfit := 0

	for _, price := range prices {
		minPrice = math.Min(minPrice, float64(price))
		maxProfit = int(math.Max(float64(maxProfit), float64(price) - minPrice))
	}

	return maxProfit
}