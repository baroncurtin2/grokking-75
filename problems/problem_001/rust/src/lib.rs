pub fn kids_with_candies(candies: Vec<i32>, extra_candies: i32) -> Vec<bool> {
    if candies.is_empty() {
        return vec![];
    }

    // find the max number of candies any kid has
    let max_candies = *candies.iter().max().unwrap_or(&0);

    // determine who has more candies than max candies with extra added
    candies
        .into_iter()
        .map(|candy| candy + extra_candies >= max_candies)
        .collect()
}

mod tests {
    use super::*;

    #[test]
    fn test_kids_with_greatest_number_of_candies() {
        let tests = vec![
            (vec![7, 3, 9, 2, 4], 5, vec![true, false, true, false, true]),
            (vec![5, 8, 6, 4, 2], 3, vec![true, true, true, false, false]),
            (vec![1, 2, 3, 4, 5], 4, vec![true, true, true, true, true]),
        ];

        for (candies, extra_candies, expected) in tests {
            let result = kids_with_candies(candies, extra_candies);
            assert_eq!(result, expected);
        }
    }

    #[test]
    fn test_empty_list() {
        let result = kids_with_candies(vec![], 5);
        assert_eq!(result, vec![]); // Empty list should return an empty list
    }

    #[test]
    fn test_single_kid() {
        let result = kids_with_candies(vec![10], 5);
        assert_eq!(result, vec![true]); // Single kid should always have the max
    }

    #[test]
    fn test_max_at_end() {
        let result = kids_with_candies(vec![1, 2, 3, 4], 4);
        assert_eq!(result, vec![true, true, true, true]); // All will reach the max (7)
    }
}
