# Brain Blog

[Read in English 🇺🇸](./README.md)

---

![Logo do Brain Blog](./static/img/logo.png)

> Brain Blog: meu “segundo cérebro” público – artigos, notas estruturadas e diários de projeto.

O Brain Blog é um **repositório de conhecimento** onde registro o que estou aprendendo e construindo.

O conteúdo se divide em dois pilares:

| Seção     | O que você encontrará                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Blog**  | Artigos, tutoriais, reflexões                                                                                            |
| **Notas** | • **Fundamentos** – conceitos atômicos<br>• **Jornadas** – road-maps de aprendizado<br>• **Projetos** – diários e ideias |

---

## Links rápidos

| **Site**             | <https://tchez.dev>                             |
| -------------------- | ----------------------------------------------- |
| **Post inicial**     | [`/blog/welcome`](./blog/2025-05-04-welcome.md) |
| **Início das notas** | [`/notes/intro`](./notes/intro.md)              |

## Desenvolvimento local

```bash
npm install
npm run start                 # inicia em inglês (padrão)
npm run start -- --locale pt  # inicia em português
npm run build                 # build de produção
npm run serve                 # preview do build
```

---

## Estrutura de pastas

```
blog/          # Posts em MD(X)
notes/         # Plugin Docs – notas estruturadas
i18n/pt/       # Traduções para PT-BR
src/           # Páginas React e CSS
static/        # Imagens, favicon
docusaurus.config.ts
```

---

## Como contribuir

Encontrou um erro ou tem uma sugestão?
Abra uma issue ou envie um pull-request — toda melhoria é bem-vinda!

---

MIT © Marco Antônio ([@tchez](https://github.com/tchez))
