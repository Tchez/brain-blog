# Brain Blog

[Leia em Português 🇧🇷](./README-PT.md)

---

![Brain Blog logo](./static/img/logo.png)

> Brain Blog: My public “second brain” – articles, structured notes and project logs.

Brain Blog is a **static knowledge vault** where I capture what I’m learning and building.

Content is split into two pillars:

| Section   | What you’ll find                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| **Blog**  | Articles, tutorials, reflections                                                                                     |
| **Notes** | • **Foundations** – atomic concepts<br>• **Journeys** – learning road-maps<br>• **Projects** – build diaries & ideas |

---

## Quick links

| **Live site**    | <https://tchez.github.io/brain-blog/>           |
| ---------------- | ----------------------------------------------- |
| **Welcome post** | [`/blog/welcome`](./blog/2025-05-04-welcome.md) |
| **Notes home**   | [`/notes/intro`](./notes/intro.md)              |

## Local development

```bash
npm install
npm run start                 # default locale (en)
npm run start -- --locale pt  # Portuguese preview
npm run build                 # build for production
npm run serve                 # preview build
```

---

## Folder layout (top-level)

```
blog/          # MD(X) posts
notes/         # Docs plugin – structured notes
i18n/pt/       # Portuguese translations
src/           # React pages & CSS
static/        # Images, favicon
docusaurus.config.ts
```

---

## Contributing

Spotted a typo or have an idea?
Open an issue or send a pull-request—every improvement helps!

---

MIT © Marco Antônio ([@tchez](https://github.com/tchez))
