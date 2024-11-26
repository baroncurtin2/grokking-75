use std::collections::HashMap;

pub fn roman_to_integer(s: &str) -> i32 {
    // define the mapping of roman numerals to integers
    let mapping: HashMap<char, i32> = [
        ('I', 1),
        ('V', 5),
        ('X', 10),
        ('L', 50),
        ('C', 100),
        ('D', 500),
        ('M', 1000),
    ]
    .iter()
    .cloned()
    .collect();

    let mut result = 0;
    let chars: Vec<char> = s.chars().collect();
    let n = chars.len();

    for i in 0..n {
        let current = chars[i];
        let current_value = mapping[&current];

        if i < n - 1 && current_value < mapping[&chars[i + 1]] {
            result -= current_value
        } else {
            result += current_value
        }
    }

    result
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_roman_to_integer() {
        let cases = vec![
            ("XLII", 42),
            ("CXCIV", 194),
            ("MMMCDXLIV", 3444),
            ("I", 1),
            ("MCMXCIV", 1994),
        ];

        for (input, expected) in cases {
            assert_eq!(roman_to_integer(input), expected);
        }
    }

    #[test]
    fn test_empty_string() {
        assert_eq!(roman_to_integer(""), 0); // Edge case: empty string
    }
}
