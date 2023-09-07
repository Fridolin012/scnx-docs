/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    startSidebar: [
        {
            type: 'category',
            link: {
                type: 'generated-index',
                title: 'Getting started on SCNX',
                description: 'Easily get started on SCNX - here you\'ll find all guides you need.',
                slug: '/intro'
            },
            label: 'Getting Started',
            collapsible: false,
            items: [
                {
                    type: 'doc',
                    id: 'setup'
                },
                {
                    type: 'doc',
                    id: 'custom-bot'
                },
                {
                    type: 'doc',
                    id: 'modmail'
                }
            ]
        },
        {
            type: 'category',
            label: 'Detailed documentation',
            items: [
                {
                    type: 'doc',
                    label: 'Custom-Bot',
                    id: 'custom-bot/intro'
                },
                {
                    type: 'doc',
                    label: 'SCNX',
                    id: 'scnx/intro'
                },
                {
                    type: 'doc',
                    label: 'Modmail-Bot',
                    id: 'modmail/intro'
                }
            ]
        }
    ],
    customBotSidebar: [
        {
            type: 'category',
            collapsed: false,
            label: 'SCNX Custom-Bot',
            link: {
                type: 'doc',
                id: 'custom-bot/intro'
            },
            items: [
                {
                    type: 'link',
                    label: 'Get started',
                    href: '/docs/custom-bot'
                },
                {
                    type: 'doc',
                    label: 'Basics about Bots on SCNX',
                    id: 'scnx/guilds/bots'
                },
                {
                    type: 'doc',
                    label: 'Troubleshooting issues',
                    id: 'custom-bot/troubleshooting'
                },
                {
                    type: 'doc',
                    label: 'Custom Commands',
                    id: 'custom-bot/custom-commands'
                },
                {
                    type: 'doc',
                    label: 'Send messages / embeds, Self-Roles & more',
                    id: 'custom-bot/login-as-bot'
                },
                {
                    type: 'doc',
                    label: 'Slash commands & Permissions',
                    id: 'custom-bot/slash-commands'
                }
            ]
        },
        {
            type: 'category',
            collapsed: false,
            label: 'Modules',
            link: {
                type: 'generated-index',
                title: 'Custom-Bot-Modules',
                description: 'The SCNX Custom-Bot consists of over 50 different modules. Each module offers unique functionality for your server. You can enable, disable and configure each module as you like. Modules are sorted into categories, which you can find below.',
                slug: '/custom-bot/modules'
            },
            items: [
                {
                    type: 'category',
                    link: {
                        type: 'generated-index',
                        title: 'Administration modules',
                        description: 'Use administration modules to make your life as an server administrator easier. These modules are designed to do the heavy-lifting as an admin for you: Manage suggestions, List partners, create Stat-Channels, welcome new members and more.',
                        slug: '/custom-bot/modules/administration'
                    },
                    label: 'Administration',
                    items: [
                        {
                            dirName: 'custom-bot/modules/administration',
                            type: 'autogenerated'
                        }
                    ]
                },
                {
                    type: 'link',
                    label: 'Artificial intelligence',
                    description: 'Use Artificial intelligence on your server to create a more interactive experience for your users..',
                    href: 'https://faq.scnx.app/ai-on-scnx/'
                },
                {
                    type: 'category',
                    label: 'Bot',
                    link: {
                        type: 'generated-index',
                        title: 'Bot-Modules',
                        description: 'Use bot modules to make your bot better - these modules unlock more customization options and features for your bot.',
                        slug: '/custom-bot/modules/bot'
                    },
                    items: [
                        {
                            dirName: 'custom-bot/modules/bot',
                            type: 'autogenerated'
                        }
                    ]
                },
                {
                    type: 'category',
                    link: {
                        type: 'generated-index',
                        title: 'Community Modules',
                        description: 'Create a better experience for your community. Use these modules to create a birthday calender, use a Level-System, start Giveaways, run Polls and more. Your community is going to love it.',
                        slug: '/custom-bot/modules/community'
                    },
                    label: 'Community',
                    items: [
                        {
                            dirName: 'custom-bot/modules/community',
                            type: 'autogenerated'
                        }
                    ]
                },
                {
                    type: 'category',
                    label: 'Games & Fun',
                    link: {
                        type: 'generated-index',
                        title: 'Game & Fun Modules',
                        description: 'Make your server more fun with fun-modules! Play Games (like UNO, Connect Four, Counter, Emoji-Quiz and more) on your Discord and engage your community.',
                        slug: '/custom-bot/modules/fun-and-games'
                    },
                    items: [
                        {
                            dirName: 'custom-bot/modules/fun',
                            type: 'autogenerated'
                        }
                    ]
                },
                {
                    type: 'category',
                    label: 'Integrations',
                    link: {
                        type: 'generated-index',
                        title: 'Integration Modules',
                        description: 'Integrate into Third-Party-Services with your Custom-Bot: Send notfications when someone tweets, posts on YouTube / TikTok and more and reward users who voted for your server on top.gg.',
                        slug: '/custom-bot/modules/integrations'
                    },
                    items: [
                        {
                            dirName: 'custom-bot/modules/integrations',
                            type: 'autogenerated'
                        }
                    ]
                },
                {
                    type: 'category',
                    label: 'Moderation',
                    link: {
                        type: 'generated-index',
                        title: 'Moderation Modules',
                        description: 'Protect your server from Raiders, Spammers and more. Track invites, moderate misbehavior and detect Ghost-Pings with these modules.',
                        slug: '/custom-bot/modules/moderation-and-security'
                    },
                    items: [
                        {
                            dirName: 'custom-bot/modules/moderation',
                            type: 'autogenerated'
                        }
                    ]
                },
                {
                    type: 'category',
                    label: 'Support',
                    link: {
                        type: 'generated-index',
                        title: 'Support Modules',
                        description: 'Sometimes, your members need help. Use the Ticket-System to answer their issues effectivity, accept Staff-Applications with the Application-Module and get notified when a user joins your Support-Voice-Channel.',
                        slug: '/custom-bot/modules/support'
                    },
                    items: [
                        {
                            dirName: 'custom-bot/modules/support',
                            type: 'autogenerated'
                        },
                        {
                            type: 'link',
                            href: 'https://modmail.net',
                            description: 'Unlock access to the world\'s most advanced Discord-Support-System with the SCNX Modmail-Bot',
                            label: 'The most advanced Discord Support-System'
                        }
                    ]
                },
                {
                    type: 'category',
                    label: 'Tools',
                    link: {
                        type: 'generated-index',
                        title: 'Tool Modules',
                        description: 'Using Tool Modules, you can make your life as a server admin easier. Simply let messages be auto-sent, publish announcements in news-channels automatically and assign every member a role at once.',
                        slug: '/custom-bot/modules/tools'
                    },
                    items: [
                        {
                            dirName: 'custom-bot/modules/tools',
                            type: 'autogenerated'
                        }
                    ]
                }
            ]
        },
        {
            type: 'category',
            label: 'More',
            collapsed: false,
            items: [
                {
                    type: 'doc',
                    id: 'custom-bot/additional-features'
                },
                {
                    type: 'link',
                    href: 'https://features.sc-network.net/board/custombot',
                    label: 'Suggest new features'
                },
                {
                    type: 'link',
                    href: 'https://github.com/ScootKit/CustomDCBot',
                    label: 'Contribute to the Custom-Bot on GitHub'
                }
            ]
        }
    ],
    modmailSidebar: [
        {
            type: 'autogenerated',
            dirName: 'modmail'
        }
    ],
    scnxSidebar: [
        {
            type: 'autogenerated',
            dirName: 'scnx'
        }
    ]
};

module.exports = sidebars;