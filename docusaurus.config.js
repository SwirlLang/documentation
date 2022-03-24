// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Lambda Code',
    tagline: 'lamdba code programming language',
    url: 'https://lc-docs.vercel.app',
    baseUrl: '/docs',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'https://raw.githubusercontent.com/LC-Lang/branding/main/logos/lc-logo.png',
    organizationName: 'LC-Lang', // Usually your GitHub org/user name.
    projectName: 'documentation', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/LC-Lang/lamdba-code/tree/main/',
                    routeBasePath: '/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/LC-Lang/lamdba-code/tree/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({image:'https://raw.githubusercontent.com/LC-Lang/branding/main/logos/lc-logo.png',
            colorMode: {
                defaultMode:'dark'
            },
            navbar: {
                title: 'Lambda Code',
                logo: {
                    alt: 'LC logo',
                    src: 'https://raw.githubusercontent.com/LC-Lang/branding/main/logos/lc-logo.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'index',
                        position: 'left',
                        label: 'Docs',
                    },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: 'https://github.com/LC-Lang/lambda-code',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Lambda Code',
                        items: [
                            {
                                label: 'About',
                                href: 'https://lambda-code.vercel.app/about',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/RSJ5TUDdqx',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/LC-Lang/lambda-code',
                            },
                        ],
                    },
                ],
                logo: {
                    alt: 'Powered by Vercel',
                    src: 'https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg',
                    href: 'https://vercel.com/?utm_source=lc-team&utm_campaign=oss',
                    height: 35,
                  },
                copyright: `Copyright © ${new Date().getFullYear()} Mrinmoy Haloi`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
