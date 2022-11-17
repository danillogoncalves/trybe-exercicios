# A estrutura deve estar ordenada para que a busca binária funcione
def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1

    while (
        start <= end
    ):  # os índices podem ser no máximo iguais,
        # o início não pode ultrapassar o fim
        mid = (start + end) // 2  # encontro o meio

        if (
            numbers[mid] == target
        ):  # se o elemento do meio for o alvo, devolve a posição do meio
            return mid

        if (
            target < numbers[mid]
        ):  # se o elemento for menor, atualiza o índice do fim
            end = mid - 1
        else:  # caso contrário, atualiza o índice do inicio
            start = mid + 1

    return -1  # Não encontrou? Retorna -1


# numbers = [2, 3, 4, 10, 40]
# target = 40

# result = binary_search(numbers, target)
# print(f"Elemento encontrado na posição: {result}")

# Solução

# A busca binária tem complexidade O(log n), uma vez que reduz pela
#  metade o número de elementos que deverá percorrer a cada nova iteração.
#  Todavia, ela só deve ser utilizada quando lidamos com arrays que já se
#  encontram ordenados, este é o caso do nosso array2. Uma vez que a busca
#  binária precisará ser executada n-vezes para cada elemento em array1,
#  partimos da operação O(n) * O(log n), que resulta em O(n log n). Uma
#  possível representação abstrata do problema é a seguinte:


# def do_something(array1, array2):
#     for number in array1:  # O (n)
#         binary_search(array2, number)  # O (log n)
