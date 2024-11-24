package problem_001

import (
	"slices"
	"testing"
)

type kidsCandiesTest struct {
	candies      []int
	extraCandies int
	expected     []bool
}

var kidsCandiesTests = []kidsCandiesTest{
	{[]int{7, 3, 9, 2, 4}, 5, []bool{true, false, true, false, true}},
	{[]int{5, 8, 6, 4, 2}, 3, []bool{true, true, true, false, false}},
	{[]int{1, 2, 3, 4, 5}, 4, []bool{true, true, true, true, true}},
}

func Test_kidsWithGreatestNumberOfCandies(t *testing.T) {
	for _, test := range kidsCandiesTests {
		if result := kidsWithGreatestNumberOfCandies(test.candies, test.extraCandies); !slices.Equal(result, test.expected) {
			t.Errorf("Output %v not equal to expected %v", result, test.expected)
		}
	}
}
