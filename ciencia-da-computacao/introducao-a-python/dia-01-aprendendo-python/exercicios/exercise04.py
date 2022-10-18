def biggest_name(list_name):
    big_name: str = list_name[0]

    for name in list_name:
        if len(name) > len(big_name):
            big_name = name

    print(big_name)


biggest_name(["Danilo", "Raphael", "Danillo"])
