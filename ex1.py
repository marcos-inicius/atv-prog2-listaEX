def maior(lista):
    return max(lista)


def menor(lista):
    return min(lista)


def media(lista):
    return sum(lista) / len(lista)


def quantidade_pares(lista):
    quantidade = 0

    for numero in lista:
        if numero % 2 == 0:
            quantidade += 1

    return quantidade


def quantidade_impares(lista):
    quantidade = 0

    for numero in lista:
        if numero % 2 != 0:
            quantidade += 1

    return quantidade


lista = list(map(int, input("Digite os números separados por espaço: ").split()))

print("Maior valor:", maior(lista))
print("Menor valor:", menor(lista))
print("Média:", media(lista))
print("Quantidade de números pares:", quantidade_pares(lista))
print("Quantidade de números ímpares:", quantidade_impares(lista))