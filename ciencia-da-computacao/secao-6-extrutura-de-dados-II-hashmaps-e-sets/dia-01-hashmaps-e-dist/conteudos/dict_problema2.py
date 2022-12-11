# A cantina da sua escola está ficando um caos
# com as filas. Um dia resolveram distribuir senhas.
#  Ocorre que perderam o controle de quais senhas
# já tinham distribuído. A única informação que a
# cantina tem agora é qual pessoa vem imediatamente
#  após uma outra. Seu trabalho é remontar completamente
#  a fila a partir dessas informações.

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
# saída: ['giovanni', 'fernanda', 'rafa', 'fran', 'daniel', 'mirian',
#  'gabriel', 'matheus', 'yasmin']


def get_order(orders):
    orders_map = {person[0]: person[1] for person in orders}
    inv_orders_map = {person[1]: person[0] for person in orders}

    next_in_line = ""

    for person in orders_map:
        if person not in inv_orders_map:
            next_in_line = person

    result = [next_in_line]
    while next_in_line in orders_map:
        result.append(orders_map[next_in_line])
        next_in_line = orders_map[next_in_line]

    return result


print(get_order(orders))
