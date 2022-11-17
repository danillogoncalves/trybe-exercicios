# def countdown(n):
#     if n == 0:
#         return print("FIM!")
#     print(n)
#     countdown(n - 1)


# countdown(5)

# Anota aí 🖊:

# Se n é igual a 0, escreva “FIM!”

# Se n não for igual a 0, escreva n e chame a função novamente com n - 1


# def factorial(n):
#     if n == 1:
#         return 1
#     else:
#         return n * factorial(n - 1)


# print(factorial(3))


# def saudacao():
#     print("Oi")


# def despedida():
#     print("Tchau")


# def init():
#     print("Inicio")
#     saudacao()
#     print("Fim")
#     despedida()


# init()


def predecessor_sum(n):
    if n == 1:
        return n
    return n + predecessor_sum(n - 1)


print(predecessor_sum(3))
