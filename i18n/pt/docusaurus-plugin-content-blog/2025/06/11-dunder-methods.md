---
title: "Você sabe o que são métodos mágicos em Python? Dica: Você usa todos os dias!"
description: "Neste artigo, vamos explorar o fascinante mundo dos métodos mágicos em Python, seu propósito e como eles podem aprimorar sua experiência de codificação."
slug: "dunder-methods"
authors: [tchez]
tags: [python, programação, artigo]
image: /img/blog/dunder-methods/article-og.png
---

> Este artigo foi originalmente publicado em [LinkedIn](https://www.linkedin.com/pulse/voc%25C3%25AA-sabe-o-que-s%25C3%25A3o-m%25C3%25A9todos-m%25C3%25A1gicos-em-python-dica-os-marco-ant%25C3%25B4nio-zcgbf)

![Dunder Methods](/img/blog/dunder-methods/article-og.png)

## Você sabe o que são métodos mágicos em Python? Dica: Você usa todos os dias!

Há alguns anos, quando estava aprendendo a usar o framework Django (o primeiro framework que aprendi), me deparei com uma característica peculiar das classes Python: o método construtor deve seguir um padrão específico — ele deve ser identificado por underscores duplos (\_\_) antes e depois da palavra `init`. Isso me chamou a atenção; por que essa estrutura específica?

<!-- truncate -->

```python
class MinhaClasse:
    def __init__(self): # Este é o método construtor
        ...
```

Tentando entender de onde vieram essas funções 'diferentes', descobri que no mundo do Python, existem vários métodos que seguem esse padrão 'dunder' (um apelido derivado de Double UNDERscore). Esses métodos não são apenas comuns — eles são especiais e fundamentais para a linguagem, conhecidos como dunder methods ou métodos mágicos.

OK, mas o que esses métodos realmente fazem? O que os torna 'mágicos'?

Essas foram algumas das perguntas que me levaram a estudá-los mais profundamente e a escrever este artigo. Espero que você goste :)

---

## O que são dunder methods?

No mundo da programação, muitas vezes nos deparamos com conceitos que parecem complexos à primeira vista, mas que, uma vez compreendidos, fazem total sentido. Um ótimo exemplo disso em Python são os _dunder methods_.

Então, o que exatamente são esses métodos? Como mencionado anteriormente, a palavra 'dunder' refere-se à notação de underscore duplo no início e no final dos nomes desses métodos especiais. Por exemplo, `__init__` para um construtor de classe, ou `__str__` para a representação em string de um objeto.

> P.S. Alguns puristas pythonicos não gostam de chamar o método `__init__` de construtor, pois tecnicamente ele é um inicializador. No entanto, para simplificar, vamos nos referir a ele como construtor neste artigo.

Esses métodos não são chamados diretamente pelo nome. Em vez disso, o Python os chama internamente quando certas ações são realizadas. Por exemplo, quando adicionamos dois objetos usando o operador `+`, o Python chama internamente o método `__add__`, que lida com a lógica de adicionar um valor a outro.

> Ficou confuso? Vou dar alguns exemplos para facilitar!

Imagine que você está construindo uma classe para representar um livro em uma biblioteca. Para fazer isso, você precisará implementar o método `__init__`, que atua como um construtor, configurando atributos iniciais como título, autor e contagem de páginas:

```python
class Livro:
    def __init__(self, titulo, autor, paginas):
        self.titulo = titulo
        self.autor = autor
        self.paginas = paginas
```

O que acontece quando você tenta adicionar dois objetos `Livro`? Você pode esperar que eles se combinem de alguma forma, mas o Python não sabe como lidar com essa operação por padrão:

```python
livro1 = Livro("Primeiro Livro", "Autor A", 100)
livro2 = Livro("Segundo Livro", "Autor B", 200)

print(livro1 + livro2)
```

Isso levantará um `TypeError` porque o Python não sabe como adicionar dois objetos `Livro`. Este código irá gerar:

```python
>>> TypeError: unsupported operand type(s) for +: 'Livro' and 'Livro'
```

Para fazer essa operação funcionar, você pode definir o método `__add__` na sua classe `Livro`. Este método especificará como dois objetos `Livro` devem ser adicionados. Por exemplo, você pode querer adicionar suas contagens de páginas:

```python
class Livro:
    def __init__(self, titulo, autor, paginas):
        self.titulo = titulo
        self.autor = autor
        self.paginas = paginas

    def __add__(self, other):
        return self.paginas + other.paginas
```

Agora, quando você tenta adicionar dois objetos `Livro`, o Python chamará o método `__add__`, que neste caso somará a quantidade de páginas. É assim que você pode personalizar o comportamento dos operadores para suas próprias classes.

```python
livro1 = Livro("Primeiro Livro", "Autor A", 100)
livro2 = Livro("Segundo Livro", "Autor B", 200)

print(livro1 + livro2) # Isso vai imprimir: 300
```

**Esse comportamento não se limita apenas ao operador de adição!**

Na verdade, a maioria dos operadores em Python pode ser personalizada usando dunder methods. Por exemplo, você pode definir como sua classe se comporta com o operador `==` implementando o método `__eq__`, ou com o operador `-` implementando o método `__sub__`. Um bom exemplo disso é o operador `in`, quando verificamos se algum `valor` está `in` uma `lista`, por baixo dos panos, o Python está chamando o método `__contains__` da classe lista, passando o `valor` como argumento. Veja o exemplo abaixo:

```python
minha_lista = [1, 2, 3, 4, 5]

print(3 in minha_lista)  # Isso vai imprimir: True
print(minha_lista.__contains__(3))  # Isso também vai imprimir: True

print(6 in minha_lista)  # Isso vai imprimir: False
print(minha_lista.__contains__(6))  # Isso também vai imprimir: False
```

## Mais exemplos de dunder methods

Agora que você tem uma compreensão básica do que são os dunder methods e como funcionam, vamos ver mais alguns exemplos de seu uso, ainda aplicados à classe `Livro`:

### `__str__`: Customizando prints

Seguindo o exemplo anterior, o que acontece quando você tenta imprimir um objeto `Livro`? Por padrão, o Python mostrará algo como `<__main__.Book object at 0x...>`, que não é muito informativo:

```python
livro1 = Livro("Primeiro Livro", "Autor A", 100)
print(livro1)
```

Isso vai imprimir algo como:

```python
>>> <__main__.Book object at 0x7f8c1b0d0>
```

Se você está se perguntando se é possível personalizar essa saída, tornando a representação mais amigável ao usuário, sim, é! Você só precisa implementar o método mágico chamado `__str__` em sua classe. Esse método permite que você defina como seu objeto deve ser representado como uma _string_. Então, vamos fazer isso:

```python
class Livro:
    def __init__(self, titulo, autor, paginas):
        self.titulo = titulo
        self.autor = autor
        self.paginas = paginas

    def __str__(self):
        return f"{self.titulo} por {self.autor}, {self.paginas} páginas"
```

Agora, quando você imprime um objeto `Livro`, ele exibirá o título, autor e contagem de páginas em um formato mais legível:

```python
livro1 = Livro("Primeiro Livro", "Autor A", 100)
print(livro1) # Isso vai imprimir: Primeiro Livro por Autor A, 100 páginas
```

### `__eq__`: Customizando verificações de igualdade

E se você quiser verificar se dois objetos `Livro` são considerados iguais? Por padrão, o Python verifica se eles são o mesmo objeto na memória, o que pode não ser o que você deseja. Para personalizar esse comportamento, você pode implementar o método `__eq__`:

```python
class Livro:
    def __init__(self, titulo, autor, paginas):
        self.titulo = titulo
        self.autor = autor
        self.paginas = paginas

    def __eq__(self, other):
        return (self.titulo == other.titulo and
                self.autor == other.autor and
                self.paginas == other.paginas)
```

Agora, você pode comparar a igualdade de dois objetos `Livro` com base em seus atributos:

```python
livro1 = Livro("Primeiro Livro", "Autor A", 100)
livro2 = Livro("Segundo Livro", "Autor B", 200)
livro3 = Livro("Primeiro Livro", "Autor A", 100)

print(livro1 == livro2)  # Isso vai imprimir: False
print(livro1 == livro3)  # Isso vai imprimir: True
print(livro3.__eq__(livro1))  # Isso vai imprimir: True
```

### `__len__`: Customizando verificações de comprimento

E se você quiser verificar quantas páginas um livro tem? Você pode verificar manualmente o atributo `paginas`, mas também pode implementar o método `__len__` para permitir o uso da função embutida `len()`:

```python
class Livro:
    def __init__(self, titulo, autor, paginas):
        self.titulo = titulo
        self.autor = autor
        self.paginas = paginas

    def __len__(self):
        return self.paginas
```

Agora, você pode usar a função `len()` em um objeto `Livro`:

```python
livro1 = Livro("Primeiro Livro", "Autor A", 100)
print(len(livro1))  # Isso vai imprimir: 100
```

### `__getitem__`: Customizando o acesso a itens

Por último, e se você quiser acessar um atributo específico de um objeto `Livro` usando indexação, como `livro[0]` para o título? Você pode implementar o método `__getitem__`:

```python
class Livro:
    def __init__(self, titulo, autor, paginas):
        self.titulo = titulo
        self.autor = autor
        self.paginas = paginas

    def __getitem__(self, index):
        if index == 0:
            return self.titulo
        elif index == 1:
            return self.autor
        elif index == 2:
            return self.paginas
        else:
            raise IndexError("Índice fora do alcance")
```

Agora, você pode acessar o título, autor e páginas de um objeto `Livro` usando indexação:

```python
livro1 = Livro("Primeiro Livro", "Autor A", 100)
print(livro1[0])  # Isso vai imprimir: Primeiro Livro
print(livro1[1])  # Isso vai imprimir: Autor A
print(livro1[2])  # Isso vai imprimir: 100
```

## Conclusão

Esses foram apenas alguns exemplos que destacam o poder e a flexibilidade dos dunder methods em Python. Com eles, você pode moldar o comportamento de suas classes e objetos de maneiras que se alinham com a sintaxe e os paradigmas da linguagem, tornando seu código mais intuitivo e 'Pythonico'.

Então, da próxima vez que você estiver projetando uma classe Python, lembre-se da magia dos dunder methods e de como eles podem enriquecer suas abstrações!

Abaixo, deixarei uma lista de alguns dos dunder methods mais usados em Python, cada um vinculado à documentação oficial:

- [`__init__`](https://docs.python.org/3/reference/datamodel.html#object.__init__): O método construtor, chamado quando um objeto é criado.
- [`__add__`](https://docs.python.org/3/reference/datamodel.html#object.__add__): Define o comportamento do operador de adição (`+`).
- [`__contains__`](https://docs.python.org/3/reference/datamodel.html#object.__contains__): Define o comportamento do operador `in` para um objeto.
- [`__str__`](https://docs.python.org/3/reference/datamodel.html#object.__str__): Define a representação em string de um objeto, usada pela função `print()`.
- [`__eq__`](https://docs.python.org/3/reference/datamodel.html#object.__eq__): Define o comportamento do operador de igualdade (`==`).
- [`__len__`](https://docs.python.org/3/reference/datamodel.html#object.__len__): Define o comportamento da função `len()` para um objeto.
- [`__getitem__`](https://docs.python.org/3/reference/datamodel.html#object.__getitem__): Define o comportamento da indexação de um objeto (por exemplo, `obj[key]`).
- [`__setitem__`](https://docs.python.org/3/reference/datamodel.html#object.__setitem__): Define o comportamento de definir um item em um objeto (por exemplo, `obj[key] = value`).
- [`__delitem__`](https://docs.python.org/3/reference/datamodel.html#object.__delitem__): Define o comportamento de deletar um item de um objeto (por exemplo, `del obj[key]`).
- [`__repr__`](https://docs.python.org/3/reference/datamodel.html#object.__repr__): Define a representação oficial de um objeto, usada pela função `repr()`.
- [`__ne__`](https://docs.python.org/3/reference/datamodel.html#object.__ne__): Define o comportamento do operador de desigualdade (`!=`).
- [`__lt__`](https://docs.python.org/3/reference/datamodel.html#object.__lt__): Define o comportamento do operador menor que (`<`).
- [`__le__`](https://docs.python.org/3/reference/datamodel.html#object.__le__): Define o comportamento do operador menor ou igual a (`<=`).
- [`__gt__`](https://docs.python.org/3/reference/datamodel.html#object.__gt__): Define o comportamento do operador maior que (`>`).
- [`__ge__`](https://docs.python.org/3/reference/datamodel.html#object.__ge__): Define o comportamento do operador maior ou igual a (`>=`).
- [`__sub__`](https://docs.python.org/3/reference/datamodel.html#object.__sub__): Define o comportamento do operador de subtração (`-`).
- [`__mul__`](https://docs.python.org/3/reference/datamodel.html#object.__mul__): Define o comportamento do operador de multiplicação (`*`).
- [`__truediv__`](https://docs.python.org/3/reference/datamodel.html#object.__truediv__): Define o comportamento do operador de divisão verdadeira (`/`).
- [`__bool__`](https://docs.python.org/3/reference/datamodel.html#object.__bool__): Define o valor de verdade de um objeto, usado pela função `bool()`.
- [`__iter__`](https://docs.python.org/3/reference/datamodel.html#object.__iter__): Define o comportamento de um objeto quando usado em um loop ou com a função `iter()`.
- [`__next__`](https://docs.python.org/3/reference/datamodel.html#object.__next__): Define o comportamento da função `next()` para um objeto, permitindo que ele seja iterável.
- [`__enter__`](https://docs.python.org/3/reference/datamodel.html#object.__enter__): Define o comportamento de um objeto quando usado em uma instrução `with`, permitindo que ele configure um contexto.
- [`__exit__`](https://docs.python.org/3/reference/datamodel.html#object.__exit__): Define o comportamento de um objeto ao sair de uma instrução `with`, permitindo que ele limpe recursos.
- [`__hash__`](https://docs.python.org/3/reference/datamodel.html#object.__hash__): Define o comportamento da função `hash()` para um objeto, permitindo que ele seja usado em coleções baseadas em hash, como conjuntos e dicionários.
- [`__del__`](https://docs.python.org/3/reference/datamodel.html#object.__del__): Define o comportamento de um objeto quando está prestes a ser destruído, permitindo ações de limpeza.

Espero que este artigo tenha esclarecido um pouco sobre o fascinante mundo dos dunder methods em Python. Se você tiver alguma dúvida ou quiser compartilhar suas experiências com dunder methods, sinta-se à vontade para entrar em contato!

## Referências

<details>
<summary><strong>Links</strong></summary>

- [Python Official Documentation - Data Model](https://docs.python.org/3/reference/datamodel.html)
- [Dunder methods | Pydon't 🐍](https://mathspp.com/blog/pydonts/dunder-methods)
- [Dunder methods in Python, really crazy functions](https://nitesh-yadav.medium.com/dunder-methods-in-python-really-crazy-functions-3455ecb6472d)

</details>
