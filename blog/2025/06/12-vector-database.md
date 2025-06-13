---
title: "From Data to Knowledge: The Power of Vector Databases"
description: "In a world flooded with unstructured data, how can we store not just information, but knowledge itself? This article dives into vector databases — a revolutionary approach that enables similarity-based search and semantic understanding. Learn how vectors and embeddings reshape data storage, power advanced AI applications, and mark a shift from traditional databases to knowledge-driven systems."
slug: "vector-database"
authors: [tchez]
tags: [rag, ai, programming, article]
image: /img/blog/vector-database/article-og.png
---

import Image from '@theme/IdealImage';
import FirstImage from '@site/static/img/blog/vector-database/image-1.png';
import SecondImage from '@site/static/img/blog/vector-database/image-2.png';
import ThirdImage from '@site/static/img/blog/vector-database/image-3.png';
import FourthImage from '@site/static/img/blog/vector-database/image-4.png';
import FifthImage from '@site/static/img/blog/vector-database/image-5.png';

> This article was originally published on [LinkedIn](https://www.linkedin.com/pulse/banco-de-dados-vetorial-armazenando-conhecimento-martins-porto-netto-gislf).

![Vector Database](/img/blog/vector-database/article-og.png)

## From Data to Knowledge: The Power of Vector Databases

**In a world flooded with unstructured data, how can we store not just information, but knowledge itself?**

This article explores the rise of **vector databases** — a revolutionary technology that enables similarity-based search and semantic understanding. We'll break down what vectors are, how they're used in Natural Language Processing (NLP), and how **embeddings** allow for efficient, contextualized representations of information. Finally, we’ll explore real-world applications and why vector databases are becoming essential in modern AI systems.

<!-- truncate -->

## The Rise of Unstructured Data

With the advance of Big Data, billions of connected devices generate real-time information in the form of text, images, videos, and more. These unstructured formats don't fit well into traditional SQL tables and demand more sophisticated storage solutions. This is where **vector databases** emerge as a game-changing approach, enabling similarity-based searches and unlocking knowledge from complex data.

Before we dive into how vector databases work, let’s first recapitulate the fundamentals of databases.

## What Is a Database?

A **database** is, simply put, an organized collection of information that can be efficiently accessed, managed, and updated. It acts as a structure that stores and organizes data, making it easy to query and manipulate using specialized software.

### Relational Databases

**Relational databases** are the most commonly used type. They store data in tables organized into rows and columns — where each row represents a record and each column represents a field or attribute. This model is ideal for structured data such as customer records, bank transactions, or product inventories.

A classic example is a customer database with columns for name, address, phone number, and email. Relational databases enable fast and precise queries like “find all customers who made a purchase in the last 30 days,” using a language known as **![SQL (Structured Query Language)](https://en.wikipedia.org/wiki/SQL)**.

### Non-Relational Databases (NoSQL)

Unlike relational databases, **NoSQL databases** are designed to handle unstructured or semi-structured data, offering more flexibility and scalability. They store information in diverse formats such as JSON documents, key-value pairs, or graphs. This makes them better suited for modern applications like social media platforms or streaming services.

For instance, a document-oriented NoSQL database might store data in JSON format, allowing for more complex and nested data structures — without requiring a rigid schema.

Among the categories of non-relational databases, **vector databases** stand out for their ability to store contextualized data — also known as **knowledge**.

## Vector Databases

**Vector databases** introduce a transformative approach tailored to store and retrieve data as **vectors** — mathematical structures that represent information in multiple dimensions. Unlike traditional databases that rely on exact matching, vector databases enable **similarity searches**, which are ideal for retrieving content like texts, images, or sounds based on their characteristics.

This leads us to a key concept: what exactly is a vector?

## What Is a Vector?

A **vector** is a structure that stores information across multiple dimensions. In the case of a three-dimensional vector, it has three coordinates — (x, y, z) — that define its position or direction in a 3D space.

A real-world example of a vector is how colors are represented in the **RGB** format (Red, Green, Blue). In this model, a color is described by three values, each representing the intensity of red, green, and blue. For instance, the color white can be represented as `[255, 255, 255]`, while black is `[0, 0, 0]`.

<Image img={FirstImage} alt="RGB Color Representation" />
<br/>

This concept extends to **4D vectors**, such as **RGBA**, where the fourth component “A” stands for **alpha** (transparency). In this case, to represent a semi-transparent red color, you might use `[255, 0, 0, 0.5]`, indicating full red intensity, no green or blue, and 50% transparency. The image below illustrates this concept:

<Image img={SecondImage} alt="RGBA Color Representation" />
<br/>

Just like a color can be represented by vectors in a three- or four-dimensional space, vector databases use vectors to organize elements such as words, images, and sounds in multidimensional spaces — where each dimension represents a specific feature or characteristic of the data and the proximity between vectors indicates similarities between items (As it happens in the RGB example, where colors close to each other in the vector space are visually similar).

## Representing Words with Vectors

Vectors are widely used to represent more abstract information, such as words. In Natural Language Processing (NLP), converting words into numbers is essential for machines to understand and manipulate them. One of the simplest ways to represent words using vectors is through a technique called One-Hot Encoding.

### One-Hot Encoding

One-Hot Encoding is a technique in which each word is transformed into a vector of zeros and ones. In this vector, each position corresponds to a specific word in the vocabulary, and only one position holds the value "1" — all the others are set to "0".

Let’s consider a set of four words: dog, cat, bird, and fish. Using One-Hot Encoding, these words would be represented as follows:

- **dog:** \[1, 0, 0, 0]
- **cat:** \[0, 1, 0, 0]
- **bird:** \[0, 0, 1, 0]
- **fish:** \[0, 0, 0, 1]

<Image img={ThirdImage} alt="One-Hot Encoding Example" />
<br/>

Each vector contains only one "1", indicating the corresponding word, while the "0s" indicate that the other words are not present. Although this approach is simple and easy to implement, it comes with some limitations — especially as the vocabulary begins to grow.

## The Limitations of One-Hot Encoding

Although simple, One-Hot Encoding doesn't capture semantic relationships between words. In the example above, "dog" and "cat" are treated as completely different, even though both are household pets, have four legs, two ears, and a tail. Another drawback appears in scenarios with large vocabularies — say, 10,000 words. In such cases, each word would be represented by a very long vector with a single "1" among 10,000 positions, offering no indication of how the words relate to one another. This inefficiency and lack of semantic information highlight the need for more advanced techniques to represent words as vectors in a meaningful way.

## Advanced Representations: Embeddings

To overcome these limitations, embeddings were introduced — dense and continuous vector representations of words, where words with similar meanings are placed close to each other in the vector space. Unlike One-Hot Encoding, embeddings capture the meaning of words, positioning related terms — like “dog” and “cat” — near each other in the vector space, since they share common features.

<Image img={FourthImage} alt="Multidimensional Vector Representation, representing the proximity of similar words" />
<br/>

## What Are Embeddings?

Embeddings are a way to represent data as vectors, where similar items are positioned close to one another in a multidimensional space. They are widely used in areas like Natural Language Processing (NLP) to capture relationships between words, images, or sounds more effectively than simpler methods like One-Hot Encoding.

These embeddings allow data with similar characteristics to cluster together, which makes similarity search and grouping of related information much more efficient.

### A Simple Analogy: Colors in a 3D Vector Space

To make this easier to understand, let’s consider a familiar example: colors in the RGB model (Red, Green, Blue). Each color is represented by three values — the intensities of red, green, and blue — and occupies a specific position in a three-dimensional (3D) space based on these values.

For example:

- **Pure Red:** \[255, 0, 0]
- **Pure Green:** \[0, 255, 0]
- **Pure Blue:** \[0, 0, 255]

<Image img={FifthImage} alt="3D Visualization of the colors Red, Light Red, Green, and Blue in a vector space. Highlighting the proximity between red and light red"
