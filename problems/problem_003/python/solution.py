def best_time_to_buy_and_sell(prices: list[int]) -> int:
    if len(prices) < 2:
        return 0

    min_price, max_profit = float("inf"), 0
    
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    
    return max_profit
