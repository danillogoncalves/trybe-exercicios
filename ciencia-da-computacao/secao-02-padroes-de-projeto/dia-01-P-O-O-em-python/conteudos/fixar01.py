class Geladeira:
    def __init__(self, cor, potencia, voltagem, temperatura_maxima, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__temperatura_maxima = temperatura_maxima
        self.__ligada = False

    @property
    def ligada(self):
        return self.__ligada

    @ligada.setter
    def ligada(self):
        if self.__ligada:
            self.__ligada = False
        else:
            self.__ligada = True

    def __str__(self):
        return f"""
        Cor: {self.__cor}
        Potência: {self.__potencia}
        Voltagem: {self.__voltagem}
        Temperatura maxima: {self.__temperatura_maxima}
        PreÇo: {self.preco}
        """


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.__nome = nome
        self.__saldo_na_conta = saldo_na_conta
        self.__geladeira = None

    @property
    def nome(self):
        return self.__nome

    @nome.setter
    def nome(self, novo_nome):
        self.__nome = novo_nome

    @property
    def saldo(self):
        return self.__saldo_na_conta

    @saldo.setter
    def saldo(self, add_saldo):
        self.__saldo_na_conta += add_saldo

    def compra_geladeira(self, geladeira: Geladeira):
        print("Entrou")
        if self.__saldo_na_conta >= geladeira.preco:
            self.__saldo_na_conta -= geladeira.preco
            self.__geladeira = geladeira

    def __str__(self):
        return f"""
        Nome: {self.__nome}
        Saldo em conta: {self.__saldo_na_conta}
        Geladeira: \n{self.__geladeira}
        """


geladeira_branca = Geladeira("Branca", 10000, 127, 4, 5000)
pessoa_compradora = Pessoa("Danillo", 4000)

print(pessoa_compradora)

print(geladeira_branca)

pessoa_compradora.compra_geladeira

print(pessoa_compradora)

pessoa_compradora.saldo = 2000

print(pessoa_compradora)

pessoa_compradora.compra_geladeira(geladeira_branca)

print(pessoa_compradora)
