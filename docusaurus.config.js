// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '鬥魂帝國',
  tagline: '玩法介紹及攻略',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://wiki.wkik.com',
  baseUrl: '/',

  organizationName: 'yaohunnice', // GitHub 用户名
  projectName: 'Wiki',            // 仓库名称

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/yaohunnice/Wiki/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '鬥魂帝國',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '玩法教程',
          },
          {
            href: 'https://github.com/yaohunnice/Wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '玩法分類',
            items: [
              {
                label: '新手指引',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社群',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/H7YvZCpcbt', // 替换为你自己的 Discord 链接
              },
              {
                label: 'GitHub 倉庫',
                href: 'https://github.com/yaohunnice/Wiki',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} 鬥魂帝國 Wiki. 內容由社群共同製作，Powered by Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
