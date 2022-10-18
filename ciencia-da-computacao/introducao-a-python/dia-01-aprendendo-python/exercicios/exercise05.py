def priceInk(squareMeter: float):
    canOfPaint: int = (squareMeter // 54) + 1
    price: float = canOfPaint * 80.00
    response: tuple[int] = (canOfPaint, price)
    print(response)


priceInk(55)
