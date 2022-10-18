def biggestName(listName):
    bigName: str = listName[0]

    for name in listName:
        if len(name) > len(bigName):
            bigName = name

    print(bigName)


biggestName(["Danilo", "Raphael", "Danillo"])
