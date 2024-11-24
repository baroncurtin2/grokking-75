# Kids With the Greatest Number of Candies (Easy)

## **Problem Statement**
There are `n` kids with candies. You are given an array `candies` containing integers, where `candies[i]` denotes the number of candies the `i`th kid has, and an integer `extraCandies`, which represents the number of extra candies you have.

Return a boolean array `result` of length `n`, where `result[i]` is `true` if, after giving all the `extraCandies` to the `i`th kid, they will have the maximum number of candies among all the kids, or `false` otherwise.

> **Note:** Multiple kids can have the maximum number of candies.

---

## **Examples**

### **Example 1**
**Input:**  
`candies = [7, 3, 9, 2, 4]`  
`extraCandies = 5`  

**Expected Output:**  
`[true, false, true, false, true]`  

**Justification:**  
- If you give all `extraCandies` to:  
  - Kid 1: `7 + 5 = 12` (maximum among kids).  
  - Kid 2: `3 + 5 = 8` (not the greatest).  
  - Kid 3: `9 + 5 = 14` (the greatest).  
  - Kid 4: `2 + 5 = 7` (not the greatest).  
  - Kid 5: `4 + 5 = 9` (the greatest).  

---

### **Example 2**
**Input:**  
`candies = [5, 8, 6, 4, 2]`  
`extraCandies = 3`  

**Expected Output:**  
`[true, true, true, false, false]`  

**Justification:**  
- Giving `3` extra candies to the first, second, and third kid makes their totals `8`, `11`, and `9` respectively, which are the highest.  
- The fourth and fifth kids can't reach these totals.

---

### **Example 3**
**Input:**  
`candies = [1, 2, 3, 4, 5]`  
`extraCandies = 4`  

**Expected Output:**  
`[true, true, true, true, true]`  

**Justification:**  
- Giving `4` extra candies to each kid will make their totals `5, 6, 7, 8, and 9` respectively, which means they all can potentially have the highest number of candies.

---

## **Constraints**
- `n == candies.length`  
- `2 <= n <= 100`  
- `1 <= candies[i] <= 100`  
- `1 <= extraCandies <= 50`
