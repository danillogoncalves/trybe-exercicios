def to_buy(shelf):
    unique_in_shelf = set(shelf)
    all_itens = set(range(1, 21))

    return all_itens - unique_in_shelf


print(to_buy([1, 2, 3, 4, 5, 6, 7, 8, 9]))
