import pytest

from solution import roman_to_integer


@pytest.mark.parametrize("s, expected", [("XLII", 42), ("CXCIV", 194), ("MMMCDXLIV", 3444),])
def test_roman_to_integer(s, expected):
    assert roman_to_integer(s) == expected