from array import array


def kids_with_candies(candies: list[int], extra_candies: int) -> list[bool]:
    candies = array('i', candies)
    max_candies = max(candies)

    return [c + extra_candies >= max_candies for c in candies]