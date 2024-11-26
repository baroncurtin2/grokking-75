pub fn best_time_to_buy_and_sell(prices: Vec<i32>) -> i32 {
    if prices.len() < 2 {
        return 0;
    }

    let mut min_price = i32::MAX;
    let mut max_profit = 0;

    for &price in prices.iter() {
        min_price = min_price.min(price);
        max_profit = max_profit.max(price - min_price);
    }

    max_profit
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_best_time_to_buy_and_sell() {
        let cases = vec![
            (vec![3, 2, 6, 5, 0, 3], 4), // Buy at 2, sell at 6
            (vec![8, 6, 5, 2, 1], 0),    // Prices keep dropping, no profit
            (vec![1, 2], 1),             // Buy at 1, sell at 2
        ];

        for (prices, expected) in cases {
            assert_eq!(best_time_to_buy_and_sell(prices), expected);
        }
    }

    #[test]
    fn test_empty_or_single_price() {
        assert_eq!(best_time_to_buy_and_sell(vec![]), 0); // No prices
        assert_eq!(best_time_to_buy_and_sell(vec![5]), 0); // Only one price
    }
}
