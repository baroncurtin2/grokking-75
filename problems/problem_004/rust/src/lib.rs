pub fn zigzag_conversion(s: String, num_rows: usize) -> String {
    if num_rows == 1 || num_rows >= s.len() {
        return s;
    }

    // create a vector of String for each row
    let mut rows: Vec<String> = vec![String::new(); num_rows];
    let mut current_row = 0;
    let mut traverse_down = false;

    for c in s.chars() {
        rows[current_row].push(c);

        // change direction at the top or bottom row
        if current_row == 0 || current_row == num_rows - 1 {
            traverse_down = !traverse_down;
        }

        // move up or down
        if traverse_down {
            current_row += 1;
        } else {
            current_row -= 1;
        }
    }

    // join all rows into string
    let mut result = String::with_capacity(s.len());
    for row in rows {
        result.push_str(&row);
    }

    result
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_zigzag_conversion() {
        let cases = vec![
            ("HELLOPROGRAMMING".to_string(), 4, "HRMEPOMILOGANLRG".to_string()), // 4 rows test case
            ("PROBLEMCHALLENGE".to_string(), 5, "PHRCAEOMLGBELNLE".to_string()), // 5 rows test case
            ("ABCDE".to_string(), 2, "ACEBD".to_string()), // 2 rows test case
            ("ABCDE".to_string(), 1, "ABCDE".to_string()), // 1 row test case (no zigzagging)
            ("A".to_string(), 1, "A".to_string()),         // Single character
        ];

        for (s, num_rows, expected) in cases {
            assert_eq!(zigzag_conversion(s, num_rows), expected);
        }
    }

    #[test]
    fn test_edge_cases() {
        assert_eq!(zigzag_conversion("".to_string(), 3), ""); // Empty string
        assert_eq!(zigzag_conversion("A".to_string(), 1), "A"); // Single character
        assert_eq!(zigzag_conversion("AB".to_string(), 1), "AB"); // Two characters, 1 row
    }
}
