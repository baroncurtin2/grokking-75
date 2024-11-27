import pytest

from solution import zigzag_conversion

@pytest.mark.parametrize("s, num_rows, expected", [
    ("HELLOPROGRAMMING", 4, "HRMEPOMILOGANLRG"),
    ("PROBLEMCHALLENGE", 5, "PHRCAEOMLGBELNLE"),
    ("ABCDE", 2, "ACEBD"),
])
def test_zigzag_conversion(s, num_rows, expected):
    assert zigzag_conversion(s, num_rows) == expected