# Brain Blog

[Leia em Português 🇧🇷](./README-PT.md)

---

![Brain Blog logo](./static/img/logo.png)

> Brain Blog: My public “second brain” – articles, tutorials and reflections.

Brain Blog is a **static blog** where I share what I’m learning and building.

The blog contains:

- Articles and tutorials
- Reflections and lessons learned from real-world projects

---

## Quick links

| **Live site**    | <https://blog.tchez.dev>                        |
| ---------------- | ----------------------------------------------- |
| **Welcome post** | [`/welcome`](./blog/2025-05-04-welcome.md)      |

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
i18n/pt/       # Portuguese translations
static/        # Images, favicon
docusaurus.config.ts
```

---

## Contributing

Spotted a typo or have an idea?
Open an issue or send a pull-request—every improvement helps!

---

MIT © Marco Antônio ([@tchez](https://github.com/tchez))
