def price_ink(square_meter: float):
    can_of_paint: int = (square_meter // 54) + 1
    price: float = can_of_paint * 80.00
    response: tuple[int] = (can_of_paint, price)
    print(response)


price_ink(55)
