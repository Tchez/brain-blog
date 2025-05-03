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
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
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
