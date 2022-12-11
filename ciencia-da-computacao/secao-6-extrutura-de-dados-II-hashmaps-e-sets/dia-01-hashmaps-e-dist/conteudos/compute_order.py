# -*- coding: utf-8 -*-
"""ENUNCIADO: Dada uma lista de tuplas, que representa a relação de pessoas
numa fila, retorne uma lista com as pessoas na ordem correta:
Ex: [ ("Bux", "Will"), ("Gleison", "Bux"), ("Will", "Joao") ]
Resultado = ["Gleison", "Bux", "Will", "Joao"]
"""


# # SOLUÇÃO LENTA (quadrática): primeira a ser construída
# def get_order(orders):
#     orders_map = {pair[0]: pair[1] for pair in orders}  # O(n)

#     first_person = ""
#     for person1, _ in orders:  # total do for: O(n²)
#         # Repete (n) vezes:
#         if person1 not in orders_map.values():  # O(n)
#             first_person = person1  # O(1)

#     result = [first_person]
#     while first_person in orders_map:  # total do while: O(n)
#         # Repete (n) vezes:
#         result.append(orders_map[first_person])  # O(1)
#         first_person = orders_map[first_person]  # O(1)
#     return result


# # SOLUÇÃO RÁPIDA (linear): evolução da primeira, conforme script
def get_order(orders):
    orders_map = {pair[0]: pair[1] for pair in orders}  # O(n)

    inv_orders_map = {pair[1]: pair[0] for pair in orders}  # O(n)

    first_person = ""
    for person1, _ in orders:  # total do for: O(n)
        # Repete (n) vezes:
        if person1 not in inv_orders_map:  # O(1)
            first_person = person1  # O(1)

    result = [first_person]
    while first_person in orders_map:  # total do while: O(n)
        # Repete (n) vezes:
        result.append(orders_map[first_person])  # O(1)
        first_person = orders_map[first_person]  # O(1)
    return result


# calculo da complexidade: O(n) + O(n) + O(n) + O(n) = O(4*n) = O(n)

if __name__ == "__main__":

    orders = [
        ("fernanda", "rafa"),
        ("fran", "daniel"),
        ("mirian", "gabriel"),
        ("matheus", "yasmin"),
        ("giovanni", "fernanda"),
        ("rafa", "fran"),
        ("daniel", "mirian"),
        ("gabriel", "matheus"),
    ]
    assert get_order(orders) == [
        "giovanni",
        "fernanda",
        "rafa",
        "fran",
        "daniel",
        "mirian",
        "gabriel",
        "matheus",
        "yasmin",
    ]
