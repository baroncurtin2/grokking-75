# Roman to Integer (Easy)

## Problem Statement
---

Given the Roman numeral string `s`, convert it into its equivalent integer and return it.

Roman numerals use combinations of seven symbols: `I`, `V`, `X`, `L`, `C`, `D`, and `M`, representing values 1, 5, 10, 50, 100, 500, and 1000 respectively.

For example:
- `I` is equivalent to 1,
- `II` is equivalent to 2,
- `XI` is equivalent to 11 (`X + I`).

In some cases, a smaller numeral before a larger numeral indicates subtraction (e.g., `IV = 4`).

## Examples

### Example 1
**Input:**  
`s = "XLII"`

**Output:**  
`42`

**Justification:**  
`L (50) - X (10) + I (1) + I (1) = 42`

---

### Example 2
**Input:**  
`s = "CXCIV"`

**Output:**  
`194`

**Justification:**  
`C (100) - X (10) + C (100) - I (1) + V (5) = 194`

---

### Example 3
**Input:**  
`s = "MMMCDXLIV"`

**Output:**  
`3444`

**Justification:**  
`M (1000) + M (1000) + M (1000) - C (100) + D (500) - X (10) + L (50) - I (1) + V (5) = 3444`

---

## Constraints
- `1 <= s.length <= 15`
- `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
- It is guaranteed that `s` is a valid Roman numeral in the range `[1, 3999]`.
