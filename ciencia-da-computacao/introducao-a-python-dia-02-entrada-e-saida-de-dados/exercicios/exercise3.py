import random


def guess_the_word():
    stuff = []
    with open("./data/listStuff.txt", mode="r") as file:
        stuff = [word.strip() for word in file]

    thing = random.choice(stuff)
    shuffle = random.sample(thing, len(thing))
    str_shuffle = "".join(shuffle)
    shot = ""
    while thing != shot:
        if shot:
            print("Você errou, tente outra vez.")
            shot: str = input(f"Qual é essa coisa {str_shuffle}: ")
        else:
            shot: str = input(f"Qual é essa coisa {str_shuffle}: ")

    print("Parabéns, você acertou!!")


guess_the_word()
