a = int(input('введите первое число '))
b = int(input('введите второе число '))
c = input('что сделать с числами? ')

if c == '+':
    sum = a + b
    print(a, ' плюс ', b, ' будет ', sum)
elif c == '-':
    sum = a - b
    print(a, ' минус ', b, ' будет ', sum)
elif c == '*':
    sum = a * b
    print(a, ' умножить на ', b, ' будет ', sum)
elif c == '/':
    sum = a / b
    print(a, ' разделить на ', b, ' будет ', sum)
else:
    print('такую комманду я не знаю')