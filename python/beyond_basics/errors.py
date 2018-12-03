def divide(a,b):
    try:
        return a/b
    except ZeroDivisionError:
        return "division por 0"

print (divide(1,0))