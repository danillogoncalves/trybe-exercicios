def list_friends(friends):
    person_to_friends = {}

    for child_1, child_2 in friends:
        if child_1 not in person_to_friends:
            person_to_friends[child_1] = set()

        if child_2 not in person_to_friends:
            person_to_friends[child_2] = set()

        person_to_friends[child_1].add(child_2)
        person_to_friends[child_2].add(child_1)

    return person_to_friends


friends = [
    ("Dani", "Ali"),
    ("Fabi", "Zizu"),
    ("Gabi", "Ito"),
    ("Fabi", "Rafa"),
    ("Ali", "Fabi"),
    ("Rafa", "Lulu"),
    ("Gabi", "Hos"),
    ("Eli", "Hos"),
    ("Hos", "Dani"),
    ("Zizu", "Gabi"),
    ("Fabi", "Gabi"),
]

print(list_friends(friends))
