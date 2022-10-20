def print_inverted(name: str):
    for index in range(len(name)):
        print(name[0:len(name) - index])


print_inverted("SHEILA")
