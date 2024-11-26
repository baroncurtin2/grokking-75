export function bestTimeToBuyAndSell(prices: number[]): number {
    if (prices.length < 2) {
        return 0;
    }

    let [minPrice, maxProfit]: [number, number] = [Infinity, 0];

    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
}
