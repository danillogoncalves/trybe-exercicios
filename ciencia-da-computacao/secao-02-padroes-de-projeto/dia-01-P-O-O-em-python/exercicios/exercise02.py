import statistics


class Estatistica:
    def media(self, list_num: list[int]):
        return sum(list_num) / len(list_num)

    def mediana(self, list_num: list[int]):
        list_num.sort()
        if len(list_num) % 2 == 0:
            median1: int = list_num[len(list_num) // 2]
            median2: int = list_num[len(list_num) // 2 - 1]
            return (median1 + median2) / 2
        else:
            return list_num[len(list_num) // 2]

    def moda(self, list_num: list[int]):
        return statistics.mode(list_num)


estatistica = Estatistica()

print(estatistica.media([1, 2, 3]))
print(estatistica.mediana([1, 3, 2]))
print(estatistica.mediana([3, 1, 2.5, 2]))
print(estatistica.moda([2, 3, 4, 4, 1]))
print(estatistica.moda([2, 3, 4, 4, 1]))
print(estatistica.moda(["SP", "BA", "MG", "SP", "MA"]))
