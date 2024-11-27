# Zigzag Conversion (Medium)

## Problem Statement
Given a string `s` and an integer `numRows` representing the number of rows, write the string in a zigzag pattern on the given number of rows, then read it line by line, and return the resultant string.

The zigzag pattern involves writing characters in a diagonal down-and-up fashion. For example, given the string `"HELLOPROGRAMMING"` and `4` rows, the pattern would look like:


Reading it line by line gives us `"HRMEPOMILOGANLRG"`.

## Examples

### Example 1
**Input:**
`s = "HELLOPROGRAMMING"`, `numRows = 4`

**Expected Output:**
`"HRMEPOMILOGANLRG"`

**Explanation:**
The zigzag pattern is:


Reading line by line gives `"HRMEPOMILOGANLRG"`.

### Example 2
**Input:**
`s = "PROBLEMCHALLENGE"`, `numRows = 5`

**Expected Output:**
`"PHRCAEOMLGBELNLE"`

**Explanation:**
The zigzag pattern is:


Reading line by line gives `"PHRCAEOMLGBELNLE"`.

### Example 3
**Input:**
`s = "ABCDE"`, `numRows = 2`

**Expected Output:**
`"ACEBD"`

**Explanation:**
The zigzag pattern is:


Reading line by line gives `"ACEBD"`.

## Constraints
- \( 1 \leq s.length \leq 1000 \)
- `s` consists of English letters (both lower-case and upper-case), commas `,`, and periods `.`.
- \( 1 \leq numRows \leq 1000 \)
