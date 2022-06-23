// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Swirl",
    tagline: "Swirl programming language",
    url: "https://swirl-docs.vercel.app",
    baseUrl: "/docs/",
    onBrokenLinks: "throw",
    staticDirectories: ['static'],
    onBrokenMarkdownLinks: "warn",
    favicon:
        "https://raw.githubusercontent.com/SwirlLang/branding/main/logos/Swirl-monogram-logo.png",
    organizationName: "SwirlLang", // Usually your GitHub org/user name.
    projectName: "documentation", // Usually your repo name.

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/SwirlLang/documentation/tree/master/",
                    routeBasePath: "/",
                },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: "https://raw.githubusercontent.com/SwirlLang/branding/main/logos/Swirl-monogram-logo.png",
            colorMode: {
                defaultMode: "dark",
            },
            navbar: {
                title: "Swirl",
                logo: {
                    alt: "Swirl logo",
                    src: "https://raw.githubusercontent.com/SwirlLang/branding/main/logos/Swirl-monogram-logo.png",
                },
                items: [
                    {
                        type: "doc",
                        docId: "introduction",
                        position: "left",
                        label: "Docs",
                    },
                    {
                        href: "https://github.com/SwirlLang/swirl",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Swirl",
                        items: [
                            {
                                label: "About",
                                href: "https://swirl-lang.vercel.app/about",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: "https://discord.gg/RSJ5TUDdqx",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/SwirlLang/swirl",
                            },
                        ],
                    },
                ],
                logo: {
                    alt: "Powered by Vercel",
                    src: "https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg",
                    href: "https://vercel.com/?utm_source=swirl-team&utm_campaign=oss",
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
