from abc import ABC, abstractmethod
import math


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def __init__(self, lado: int):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

    def perimetro(self):
        return self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base: int, altura: int):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return (self.base + self.altura) * 2


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return math.pi * self.raio**2

    def perimetro(self):
        return 2 * math.pi * self.raio


quadrado = Quadrado(4)
retangulo = Retangulo(4, 6)
circulo = Circulo(3)

print(quadrado.perimetro())
print(quadrado.area())
print(retangulo.perimetro())
print(retangulo.area())
print(circulo.perimetro())
print(circulo.area())
