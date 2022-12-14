def num_children(friends):
    unique_children = set()

    for child_1, child_2 in friends:
        unique_children.add(child_1)
        unique_children.add(child_2)

    return len(unique_children)


friends = [
    ("Dani", "Ali"),
    ("Ali", "Dani"),
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
    ("Zizu", "Gabi"),
    ("Fabi", "Gabi"),
    ("Zizu", "Gabi"),
    ("Fabi", "Gabi"),
    ("Zizu", "Gabi"),
    ("Fabi", "Gabi"),
    ("Zizu", "Gabi"),
    ("Fabi", "Gabi"),
]

print(num_children(friends))
