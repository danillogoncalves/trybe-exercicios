from operator import concat


def print_square(num: int):
    print(concat("n: ", str(num)), "\n")
    line: str = ""
    for index in range(num):
        for index in range(num):
            line += "*"
        line += "\n"

    print(line)


print_square(5)

# def draw_square(n):
#     for row in range(n):
#         print(n * '*')
