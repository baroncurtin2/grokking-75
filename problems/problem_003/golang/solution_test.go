package problem_003

import "testing"

type bestTimeToBuyAndSellTest struct {
	prices   []int
	expected int
}

var bestTimeToBuyAndSellTests = []bestTimeToBuyAndSellTest{
	{[]int{3, 2, 6, 5, 0, 3}, 4},
	{[]int{8, 6, 5, 2, 1}, 0},
	{[]int{1, 2}, 1},
}

func Test_bestTimeToBuyAndSell(t *testing.T) {
	for _, test := range bestTimeToBuyAndSellTests {
		if result := bestTimeToBuyAndSell(test.prices); result != test.expected {
			t.Errorf("Output %v not equal to expected %v", result, test.expected)
		}
	}
}
