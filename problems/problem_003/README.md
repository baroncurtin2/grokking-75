# Best Time to Buy and Sell (Easy)

## Problem Statement

You are given an array `prices` where `prices[i]` is the price of a given stock on the _i-th day_.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

---

## Examples

### Example 1:

**Input:**  
`[3, 2, 6, 5, 0, 3]`

**Expected Output:**  
`4`

**Justification:**  
Buy the stock on day 2 (price = 2) and sell it on day 3 (price = 6). Profit = `6 - 2 = 4`.

---

### Example 2:

**Input:**  
`[8, 6, 5, 2, 1]`

**Expected Output:**  
`0`

**Justification:**  
Prices are continuously dropping, so no profit can be made.

---

### Example 3:

**Input:**  
`[1, 2]`

**Expected Output:**  
`1`

**Justification:**  
Buy on day 1 (price = 1) and sell on day 2 (price = 2). Profit = `2 - 1 = 1`.

---

## Constraints:

-   `1 <= prices.length <= 10^5`
-   `0 <= prices[i] <= 10^4`
