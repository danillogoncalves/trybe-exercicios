keys = [
    ("ABC", 2),
    ("DEF", 3),
    ("GHI", 4),
    ("JKL", 5),
    ("MNO", 6),
    ("PQRS", 7),
    ("TUV", 8),
    ("WXYZ", 9),
]


def decode_message_in_phone(keys: tuple[(str, int)], message: str):
    decode = ""

    for letter in message:

        for key, num in keys:
            if key.find(letter) >= 0:
                decode += str(num)
                break
            if letter == "-" or letter <= "1":
                decode += str(letter)
                break

    return decode


result = decode_message_in_phone(keys, "MY-LOVE")

print(result)
