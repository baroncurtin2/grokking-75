package problem_002

import "testing"

type romanToIntegerTest struct {
	s        string
	expected int
}

var romanToIntegerTests = []romanToIntegerTest{
	{"XLII", 42},
	{"CXCIV", 194},
	{"MMMCDXLIV", 3444},
}

func Test_romanToInteger(t *testing.T) {
	for _, test := range romanToIntegerTests {
		if result := romanToInteger(test.s); result != test.expected {
			t.Errorf("Output %v not equal to expected %v", result, test.expected)
		}
	}
}
