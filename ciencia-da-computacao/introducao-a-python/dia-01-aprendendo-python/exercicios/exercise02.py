def arithmetic_average(list):
    sum: int = 0
    for number in list:
        sum += number

    result = sum / len(list)
    return result


result: int = arithmetic_average([1, 2, 3, 4, 5, 6])

print(result)
