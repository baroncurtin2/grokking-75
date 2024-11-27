def zigzag_conversion(s: str, num_rows: int) -> str:
    if num_rows == 1:
        # no zigzag string possible
        return s

    result = [''] * num_rows

    current_row = 0
    traverse_down = False

    for char in s:
        result[current_row] += char

        if current_row == 0 or current_row == num_rows - 1:
            traverse_down = not traverse_down

        current_row += 1 if traverse_down else -1

    return ''.join(result)
