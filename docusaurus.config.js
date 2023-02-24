// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Swirl",
    tagline: "Swirl programming language",
    url: "https://swirl-lang.vercel.app",
    baseUrl: "/",
    onBrokenLinks: "throw",
    staticDirectories: ["static"],
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
                },
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
                    href: "https://swirl-lang.vercel.app",
                    target: "_self",
                },
                items: [
                    {
                        type: "doc",
                        docId: "getting-started/getting-started",
                        position: "left",
                        label: "Docs",
                    },
                    { to: "blog", label: "Blog", position: "left" },
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
                                html: "A modern, beginner-friendly language that combines power, performance, and simplicity.",
                            },
                        ],
                    },
                    {
                        title: "Info",
                        items: [
                            {
                                label: "About",
                                href: "https://swirl-lang.vercel.app/about",
                            },
                            {
                                label: "Contact",
                                href: "https://swirl-lang.vercel.app/contact",
                            },
                            {
                                label: "Download",
                                href: "https://swirl-lang.vercel.app/download",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: "https://swirl-lang.vercel.app/discord",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/SwirlLang/swirl",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/SwirlLang",
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
                copyright: `Made by <a href="https://github.com/MrinmoyHaloi" target="_blank">Mrinmoy Haloi</a>`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
        themes: [
            [
              // @ts-ignore
              require.resolve("@easyops-cn/docusaurus-search-local"),
              /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
              // @ts-ignore
              ({
                // ... Your options.
                // `hashed` is recommended as long-term-cache of index file is possible.
                hashed: true,
                removeDefaultStopWordFilter: true,
              }),
            ],
          ],
};

module.exports = config;
