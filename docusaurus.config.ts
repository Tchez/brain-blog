import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Brain Blog",
  tagline: "Structured brain‑dump, EN + PT",
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
    localeConfigs: {
      en: { label: "English", htmlLang: "en" },
      pt: { label: "Português", htmlLang: "pt-BR" },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/tchez/brain-blog/edit/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ["rss", "atom"], xslt: true },
          editUrl: "https://github.com/tchez/brain-blog/edit/main/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: { customCss: "./src/css/custom.css" },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Brain Blog",
      logo: { alt: "Brain Blog", src: "img/logo.svg" },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        { type: "localeDropdown", position: "right" },
        {
          href: "https://github.com/tchez/brain-blog",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      /* //TODO: Personalise later */
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
