---
title: "Do you know what magic methods are in Python? Hint: You use them every day!"
description: "In this article, we will explore the fascinating world of magic methods in Python, their purpose, and how they can enhance your coding experience. Let's dive in!"
slug: "dunder-methods"
authors: [tchez]
tags: [python, programming, article]
image: /img/blog/dunder-methods/article-og.png
---

> This article was originally published on [LinkedIn](https://www.linkedin.com/pulse/voc%25C3%25AA-sabe-o-que-s%25C3%25A3o-m%25C3%25A9todos-m%25C3%25A1gicos-em-python-dica-os-marco-ant%25C3%25B4nio-zcgbf).

![Dunder Methods](/img/blog/dunder-methods/article-og.png)

## Do you know what magic methods are in Python? Hint: You use them every day!

A few years ago, when I was learning to use the Django framework (the first framework I ever learned), I came across a peculiar characteristic of Python classes: the constructor method has to follow a specific pattern — it must be identified by double underscores (\_\_) before and after the word `init`. That struck me as odd; why this specific structure?

<!-- truncate -->

```python
class MyClass:
    def __init__(self): # This is the constructor method
        ...
```

Trying to understand where these 'different' functions came from, I found out that in the world of Python, there are several methods that follow this 'dunder' pattern (a nickname derived from Double UNDERscore). These methods aren’t just common — they’re special and fundamental to the language, known as dunder methods or magic methods.

OK, but what do these methods actually do? What makes them 'magic'?

Those were some of the questions that led me to study them more deeply and write this article. Hope you enjoy it :)

---

## What are dunder methods?

In the world of programming, we often come across concepts that seem complex at first, but once understood, make perfect sense. A great example of this in Python is _dunder methods_.

So, what exactly are these methods? As mentioned earlier, the word 'dunder' refers to the double underscore notation at the beginning and end of the names of these special methods. For instance, `__init__` for a class constructor, or `__str__` for the string representation of an object.

> P.S. Some Python purists don’t like calling the `__init__` method a constructor, since technically it’s an initializer. However, for the sake of simplicity, we’ll refer to it as a constructor throughout this article.

These methods aren’t called directly by name. Instead, Python calls them internally when certain actions are performed. For example, when we add two objects using the `+` operator, Python internally calls the `__add__` method, which handles the logic of adding one value to another.

> Still a bit confusing? Let me give you some examples to make it clearer!

Imagine you're building a class to represent a book in a library. To do that, you’ll need to implement the `__init__` method, which acts as a constructor, setting up initial attributes like title, author, and page count:

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
```

What happens when you try to add two `Book` objects together? You might expect them to combine in some way, but Python doesn't know how to handle that operation by default:

```python
book1 = Book("First Book", "Author A", 100)
book2 = Book("Second Book", "Author B", 200)

print(book1 + book2)
```

This will raise a `TypeError` because Python doesn't know how to add two `Book` objects together. This code will output:

```python
>>> TypeError: unsupported operand type(s) for +: 'Book' and 'Book'
```

To make this operation work, you can define the `__add__` method in your `Book` class. This method will specify how two `Book` objects should be added together. For example, you might want to add their page counts:

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def __add__(self, other):
        return self.pages + other.pages
```

Now, when you try to add two `Book` objects, Python will call the `__add__` method, in this case, summing their page counts. This is how you can customize the behavior of operators for your own classes.

```python
book1 = Book("First Book", "Author A", 100)
book2 = Book("Second Book", "Author B", 200)

print(book1 + book2) # This will output: 300
```

**This behavior isn't limited to just the addition operator!**

Actually, the most operators in Python can be customized using dunder methods. For example, you can define how your class behaves with the `==` operator by implementing the `__eq__` method, or with the `-` operator by implementing the `__sub__` method. A good example of this is the `in` operator, when we verify if some `value` is `in` a `list`, behind the scenes, Python is calling the `__contains__` method of the list class, passing the `value` as an argument. See the example below:

```python
my_list = [1, 2, 3, 4, 5]

print(3 in my_list)  # This will output: True
print(my_list.__contains__(3))  # This will also output: True

print(6 in my_list)  # This will output: False
print(my_list.__contains__(6))  # This will also output: False
```

## More examples of dunder methods

Now that you have a basic understanding of what dunder methods are and how they work, let's see some more examples of their usage, still applied to the `Book` class:

### `__str__`: Customizing prints

Following the previous example, what happens when you try to print a `Book` object? By default, Python will show something like `<__main__.Book object at 0x...>`, which isn't very informative:

```python
book1 = Book("First Book", "Author A", 100)
print(book1)
```

This will output something like:

```python
>>> <__main__.Book object at 0x7f8c1b0d0>
```

If you're wondering whether it's possible to customize this output, making the representation more user-friendly, yes, it is! You just need to implement the magic method called `__str__` in your class. This method allows you to define how your object should be represented as a _string_. So, let's go ahead and implement it:

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def __str__(self):
        return f"{self.title} by {self.author}, {self.pages} pages"
```

Now, when you print a `Book` object, it will display the title, author, and page count in a more readable format:

```python
book1 = Book("First Book", "Author A", 100)
print(book1) # This will output: First Book by Author A, 100 pages
```

### `__eq__`: Customizing equality checks

What if you want to check if two `Book` objects are considered equal? By default, Python checks if they are the same object in memory, which might not be what you want. To customize this behavior, you can implement the `__eq__` method:

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def __eq__(self, other):
        return (self.title == other.title and
                self.author == other.author and
                self.pages == other.pages)
```

Now, you can compare two `Book` objects for equality based on their attributes:

```python
book1 = Book("First Book", "Author A", 100)
book2 = Book("Second Book", "Author B", 200)
book3 = Book("First Book", "Author A", 100)

print(book1 == book2)  # This will output: False
print(book1 == book3)  # This will output: True
print(book3.__eq__(book1))  # This will output: True
```

### `__len__`: Customizing length checks

What if you want to check how many pages a book has? You can manually check the `pages` attribute, but you can also implement the `__len__` method to allow the use of the built-in `len()` function:

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def __len__(self):
        return self.pages
```

Now, you can use the `len()` function on a `Book` object:

```python
book1 = Book("First Book", "Author A", 100)
print(len(book1))  # This will output: 100
```

### `__getitem__`: Customizing item access

Lastly, what if you want to access a specific attribute of a `Book` object using indexing, like `book[0]` for the title? You can implement the `__getitem__` method:

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def __getitem__(self, index):
        if index == 0:
            return self.title
        elif index == 1:
            return self.author
        elif index == 2:
            return self.pages
        else:
            raise IndexError("Index out of range")
```

Now, you can access the title, author, and pages of a `Book` object using indexing:

```python
book1 = Book("First Book", "Author A", 100)
print(book1[0])  # This will output: First Book
print(book1[1])  # This will output: Author A
print(book1[2])  # This will output: 100
```

## Conclusion

These were just a few examples that highlight the power and flexibility of dunder methods in Python. With them, you can shape the behavior of your classes and objects in ways that align with the language's syntax and paradigms, making your code more intuitive and 'Pythonic'.

So, next time you're designing a Python class, remember the magic of dunder methods and how they can enrich your abstractions!

Bellow, I'll leave a list of some of the most commonly used dunder methods in Python, each linked to the official documentation for further reading:

- [`__init__`](https://docs.python.org/3/reference/datamodel.html#object.__init__): The constructor method, called when an object is created.
- [`__add__`](https://docs.python.org/3/reference/datamodel.html#object.__add__): Defines the behavior of the addition operator (`+`).
- [`__contains__`](https://docs.python.org/3/reference/datamodel.html#object.__contains__): Defines the behavior of the `in` operator for an object.
- [`__str__`](https://docs.python.org/3/reference/datamodel.html#object.__str__): Defines the string representation of an object, used by the `print()` function.
- [`__eq__`](https://docs.python.org/3/reference/datamodel.html#object.__eq__): Defines the behavior of the equality operator (`==`).
- [`__len__`](https://docs.python.org/3/reference/datamodel.html#object.__len__): Defines the behavior of the `len()` function for an object.
- [`__getitem__`](https://docs.python.org/3/reference/datamodel.html#object.__getitem__): Defines the behavior of indexing an object (e.g., `obj[key]`).
- [`__setitem__`](https://docs.python.org/3/reference/datamodel.html#object.__setitem__): Defines the behavior of setting an item in an object (e.g., `obj[key] = value`).
- [`__delitem__`](https://docs.python.org/3/reference/datamodel.html#object.__delitem__): Defines the behavior of deleting an item from an object (e.g., `del obj[key]`).
- [`__repr__`](https://docs.python.org/3/reference/datamodel.html#object.__repr__): Defines the official string representation of an object, used by the `repr()` function.
- [`__ne__`](https://docs.python.org/3/reference/datamodel.html#object.__ne__): Defines the behavior of the inequality operator (`!=`).
- [`__lt__`](https://docs.python.org/3/reference/datamodel.html#object.__lt__): Defines the behavior of the less than operator (`<`).
- [`__le__`](https://docs.python.org/3/reference/datamodel.html#object.__le__): Defines the behavior of the less than or equal to operator (`<=`).
- [`__gt__`](https://docs.python.org/3/reference/datamodel.html#object.__gt__): Defines the behavior of the greater than operator (`>`).
- [`__ge__`](https://docs.python.org/3/reference/datamodel.html#object.__ge__): Defines the behavior of the greater than or equal to operator (`>=`).
- [`__sub__`](https://docs.python.org/3/reference/datamodel.html#object.__sub__): Defines the behavior of the subtraction operator (`-`).
- [`__mul__`](https://docs.python.org/3/reference/datamodel.html#object.__mul__): Defines the behavior of the multiplication operator (`*`).
- [`__truediv__`](https://docs.python.org/3/reference/datamodel.html#object.__truediv__): Defines the behavior of the true division operator (`/`).
- [`__bool__`](https://docs.python.org/3/reference/datamodel.html#object.__bool__): Defines the truth value of an object, used by the `bool()` function.
- [`__iter__`](https://docs.python.org/3/reference/datamodel.html#object.__iter__): Defines the behavior of an object when used in a loop or with the `iter()` function.
- [`__next__`](https://docs.python.org/3/reference/datamodel.html#object.__next__): Defines the behavior of the `next()` function for an object, allowing it to be iterable.
- [`__enter__`](https://docs.python.org/3/reference/datamodel.html#object.__enter__): Defines the behavior of an object when used in a `with` statement, allowing it to set up a context.
- [`__exit__`](https://docs.python.org/3/reference/datamodel.html#object.__exit__): Defines the behavior of an object when exiting a `with` statement, allowing it to clean up resources.
- [`__hash__`](https://docs.python.org/3/reference/datamodel.html#object.__hash__): Defines the behavior of the `hash()` function for an object, allowing it to be used in hash-based collections like sets and dictionaries.
- [`__del__`](https://docs.python.org/3/reference/datamodel.html#object.__del__): Defines the behavior of an object when it is about to be destroyed, allowing for cleanup actions.

I hope this article has shed some light on the fascinating world of dunder methods in Python. If you have any questions or want to share your experiences with dunder methods, feel free to get in touch! Happy coding!

## References

- [Python Official Documentation - Data Model](https://docs.python.org/3/reference/datamodel.html)
- [Dunder methods | Pydon't 🐍](https://mathspp.com/blog/pydonts/dunder-methods)
- [Dunder methods in Python, really crazy functions](https://nitesh-yadav.medium.com/dunder-methods-in-python-really-crazy-functions-3455ecb6472d)
