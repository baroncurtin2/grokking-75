import pytest

from solution import best_time_to_buy_and_sell


@pytest.mark.parametrize("prices, expected", [
    ([3, 2, 6, 5, 0, 3], 4),
    ([8, 6, 5, 2, 1], 0),
    ([1, 2], 1),
])
def test_best_time_to_buy_and_sell(prices, expected):
    assert best_time_to_buy_and_sell(prices) == expected
