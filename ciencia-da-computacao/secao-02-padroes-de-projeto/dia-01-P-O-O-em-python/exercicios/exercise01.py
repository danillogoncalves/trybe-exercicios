class TV:
    def __init__(self, tamanho: int):
        self.__volume = 50
        self.__canal = 1
        self.tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1
            print(f"Aumentou para: {self.__volume}")
        else:
            print(f"O volume está no máximo e é {self.__volume}")

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1
            print(f"Diminuiu para: {self.__volume}")
        else:
            print(f"O volume está no mínimo e é {self.__volume}")

    def modificar_canal(self, num_canal: int):
        try:
            if 1 < int(num_canal) < 99:
                self.__canal = num_canal
                print(f"Você está no canal {self.__canal}")
            else:
                raise ValueError
        except ValueError:
            print("O canal não existe!!!")

    def ligar_desligar(self):
        if self.__ligada:
            self.__ligada = False
            print("Desligada.")
        else:
            self.__ligada = True
            print("Ligada.")


new_tv = TV(40)

print(new_tv.tamanho)

new_tv.aumentar_volume()
new_tv.diminuir_volume()
new_tv.modificar_canal(5)
new_tv.modificar_canal(10)
new_tv.modificar_canal(101)
new_tv.ligar_desligar()
new_tv.ligar_desligar()
