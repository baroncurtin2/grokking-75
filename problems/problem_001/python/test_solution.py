import pytest

from solution import kids_with_candies


@pytest.mark.parametrize("candies, extra_candies, expected", [
    ([7, 3, 9, 2, 4], 5, [True, False, True, False, True]),
    ([5, 8, 6, 4, 2], 3, [True, True, True, False, False]),
    ([1, 2, 3, 4, 5], 4, [True, True, True, True, True]),
])
def test_solution(candies, extra_candies, expected):
    assert kids_with_candies(candies, extra_candies) == expected
