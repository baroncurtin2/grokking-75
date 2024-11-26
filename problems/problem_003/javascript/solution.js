export function bestTimeToBuyAndSell(prices) {
    if (prices.length < 2) {
        return 0;
    }

    let [minPrice, maxProfit] = [Infinity, 0];

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
}