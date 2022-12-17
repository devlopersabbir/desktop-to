import random

playGame = "y"

while(playGame == "y"):
    answer = random.randint(1, 10)
    inputNumber = int(input("Guss a number bettewn 1 to 10: "))

    if inputNumber != answer:
        print("you are loss")
    elif inputNumber < answer:
        print("apnr number ar theke gusses number boro")
    elif inputNumber > answer:
        print("apnr number ar theke gusses number boro")
    elif inputNumber == answer:
        print(f"you are wine! computer gusses and number and your number {answer}==={inputNumber}")