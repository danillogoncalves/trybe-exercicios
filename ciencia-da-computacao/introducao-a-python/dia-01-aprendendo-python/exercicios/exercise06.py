def it_triangle(num1, num2, num3):
    if (num1 + num2) < num3:
        print("Não é um triângulo!")
    elif num1 == num2 and num1 == num3:
        print("Triângulo Equilátero")
    elif num1 == num2 or num1 == num3 or num2 == num3:
        print("Triângulo Isósceles")
    else:
        print("Triângulo Escaleno")


it_triangle(1, 2, 3)
