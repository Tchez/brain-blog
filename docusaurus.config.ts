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
      logo: { alt: "Brain Blog Logo", src: "img/logo.svg" },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar", // <- corrigido
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
      style: "dark",
      links: [
        {
          title: "Learn",
          items: [
            { label: "Foundations", to: "/docs/foundations/intro" },
            { label: "Learning AI", to: "/docs/jorneys/learning-ai/overview" },
            { label: "Tutorials", to: "/docs/tutorials/intro" },
          ],
        },
        {
          title: "Community",
          items: [
            { label: "GitHub", href: "https://github.com/tchez/brain-blog" },
            {
              label: "Issues",
              href: "https://github.com/tchez/brain-blog/issues",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Brain Blog. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
