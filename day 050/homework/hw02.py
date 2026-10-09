def remove_char(s):
    name = s[0]
    num = s[-1]
    s = s.removeprefix(name)
    s = s.removesuffix(num)
    return s