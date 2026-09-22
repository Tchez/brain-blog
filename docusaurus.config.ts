import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Brain Blog",
  tagline: "Blog to document my learning journey",
  favicon: "/img/favicon.ico",

  /* GitHub Pages */
  url: "https://blog.tchez.dev",
  baseUrl: "/",

  trailingSlash: true,

  organizationName: "tchez",
  projectName: "brain-blog",

  onBrokenLinks: "throw",

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  themes: ["@docusaurus/theme-mermaid"],

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
          routeBasePath: "/",
          showReadingTime: true,
          feedOptions: { type: ["rss", "atom"], xslt: true },
          editUrl: "https://github.com/tchez/brain-blog/edit/main/",
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.7,
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 100,
        max: 1200,
        min: 640,
        steps: 3,
        disableInDev: false,
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          /* Blog moved off tchez.dev root: routeBasePath went from "blog" to "/" (2026-09-22) */
          { from: "/blog/welcome", to: "/welcome" },
          { from: "/blog/dunder-methods", to: "/dunder-methods" },
          { from: "/blog/vector-database", to: "/vector-database" },
        ],
      },
    ],
  ],

  themeConfig: {
    image: "/img/logo-og.png",
    metadata: [
      /* ---------- SEO base ---------- */
      {
        name: "keywords",
        content: "ai, full-stack, blog, tutorials, marco netto, tchez",
      },
      { name: "author", content: "Marco Netto" },
      /* ---------- Open Graph base ---------- */
      /* ---------- Twitter Cards ---------- */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:creator", content: "@_tchez" },
      { name: "twitter:title", content: "Brain Blog – AI & Tutorials" },
      {
        name: "twitter:description",
        content: "Articles, tutorials and reflections by Marco Netto.",
      },
      { name: "twitter:image", content: "/img/logo-og.png" },
    ],
    deploymentBranch: "gh-pages",
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Brain Blog",
      logo: { alt: "Brain Blog Logo", src: "/img/logo.png" },
      items: [
        { to: "/welcome", label: "About Brain Blog", position: "left" },

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
