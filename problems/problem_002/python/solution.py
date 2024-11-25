def roman_to_integer(s: str) -> int:
    mapping: dict[str, int] = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    result = 0
    n = len(s)

    for i, char in enumerate(s):
        value = mapping.get(char)

        if i < n - 1 and value < mapping[s[i + 1]]:
            result -= value
        else:
            result += value
    return result