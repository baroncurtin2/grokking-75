package problem_004

import "testing"

type zigzagConversionTest struct {
	s string
	numRows int
	expected string
}

var zigzagConversionTests = []zigzagConversionTest{
	{"HELLOPROGRAMMING", 4, "HRMEPOMILOGANLRG"},
	{"PROBLEMCHALLENGE", 5, "PHRCAEOMLGBELNLE"},
	{"ABCDE", 2, "ACEBD"},
}

func Test_zigzagConversion(t *testing.T) {
	for _, test := range zigzagConversionTests {
		if result := zigzagConversion(test.s, test.numRows); result != test.expected {
			t.Errorf("Output %v not equal to expected %v", result, test.expected)
		}
	}
}