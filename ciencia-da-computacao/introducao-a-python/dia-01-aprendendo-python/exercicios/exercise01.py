def higherNumber(num1: int, num2: int):
    if num1 > num2:
        return num1
    elif num1 < num2:
        return num2
    else:
        return "São iguais!"


result = higherNumber(2, 2)

print(result)
