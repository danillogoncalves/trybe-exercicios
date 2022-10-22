def function_if_fizz_buzz(number: int):
    if number % 3 == 0 and number % 5:
        return "FizzBuzz"
    elif number % 3 == 0:
        return "Fizz"
    elif number % 5 == 0:
        return "Buzz"
    else:
        return number


def fizz_buzz_fizzbuzz(list: list):
    return [function_if_fizz_buzz(question) for question in list]
