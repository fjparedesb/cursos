
correct_password = "123"

name = input("Ingrese su nombre: ")
password = input("Ingrese su contraseña: ")

while correct_password != password:
    password = input("Contraseña erronea, intente de nuevo: ")

print("Hola %s ya estas logueado" % name)