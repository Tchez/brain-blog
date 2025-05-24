import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Brain Blog",
  tagline: "Blog to document my learning journey",
  favicon: "img/favicon.ico",

  /* GitHub Pages */
  url: "https://tchez.github.io",
  baseUrl: "/brain-blog/",
  organizationName: "tchez",
  projectName: "brain-blog",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  /* ── i18n ─────────────────────────────── */
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
    path: "i18n",
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en",
        calendar: "gregory",
        path: "en",
      },
      pt: {
        label: "Português",
        direction: "ltr",
        htmlLang: "pt-BR",
        calendar: "gregory",
        path: "pt",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: { type: ["rss", "atom"], xslt: true },
          editUrl: "https://github.com/tchez/brain-blog/edit/main/",
        },
        theme: { customCss: "./src/css/custom.css" },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "notes",
        path: "notes",
        routeBasePath: "notes",
        sidebarPath: "./sidebars-notes.ts",
        editUrl: "https://github.com/tchez/brain-blog/edit/main/",
      },
    ],
  ],
  themeConfig: {
    image: "img/logo-og.png",
    metadata: [
      /* ---------- SEO base ---------- */
      {
        name: "keywords",
        content:
          "ai, full-stack, blog, tutorials, speakup palmas, marco antônio, notes, portfolio",
      },
      /* ---------- Open Graph base ---------- */
      /* ---------- Twitter Cards ---------- */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:creator", content: "@_tchez" },
      { name: "twitter:title", content: "Brain Blog – AI, Notes & Projects" },
      {
        name: "twitter:description",
        content:
          "Articles, structured notes and project logs by Marco Antônio.",
      },
      { name: "twitter:image", content: "/img/logo-og.png" },
    ],
    deploymentBranch: "gh-pages",
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Brain Blog",
      logo: { alt: "Brain Blog Logo", src: "img/logo.png" },
      items: [
        { to: "/blog/welcome", label: "About Brain Blog", position: "left" },
        {
          to: "/notes/intro",
          label: "Notes",
          position: "left",
        },
        { to: "/blog", label: "Blog", position: "left" },

        /* idioma + redes */
        { type: "localeDropdown", position: "right" },
        {
          href: "https://www.linkedin.com/in/tchez/",
          label: "LinkedIn",
          position: "right",
        },
        {
          href: "https://github.com/tchez/brain-blog",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
