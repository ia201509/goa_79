def repeat_str(repeat, string):
    result = ""
    while repeat > 0:
        result += string
        repeat -= 1
    return result