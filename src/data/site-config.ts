import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://deadtechguy.fun',
    avatar: {
        src: avatar,
        alt: 'SivaSoorya G.R'
    },
    title: 'SivaSoorya G.R',
    seoTitle: 'DeadTechGuy | SivaSoorya G.R',
    personName: 'SivaSoorya G.R',
    brandName: 'DeadTechGuy',
    alternateNames: ['Dead Tech Guy', 'SivaSoorya', 'Siva Soorya', 'DTG'],
    keywords: [
        'SivaSoorya',
        'Siva Soorya',
        'SivaSoorya G.R',
        'DeadTechGuy',
        'Dead Tech Guy',
        'machine learning blog',
        'deep learning notes'
    ],
    subtitle: 'DTG Creator | Co-Founder Soluto.',
    description:
        'DeadTechGuy (also known as Dead Tech Guy), created by SivaSoorya G.R, shares machine learning notes, tech experiments, and honest builds in public.',
    image: {
        src: '../assets/images/og/deadtechguy-site.png',
        alt: 'DeadTechGuy — ML notes, experiments, and tech thoughts'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects/'
        },
        {
            text: 'Blog',
            href: '/blog/'
        },
        {
            text: 'Tags',
            href: '/tags/'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about/'
        },
        {
            text: 'Contact',
            href: '/contact/'
        },
        {
            text: 'Terms',
            href: '/terms/'
        }
    ],
    socialLinks: [
        {
            text: 'YouTube',
            href: 'https://www.youtube.com/@DeadTechGuy/'
        },
        {
            text: 'Bluesky',
            href: 'https://bsky.app/profile/deadtechguy.bsky.social'
        },
        {
            text: 'X/Twitter',
            href: 'https://x.com/dtg_fun'
        }
    ],
    hero: {
        title: 'DeadTechGuy - Welcome to my small rentfree corner of the internet.',
        text: "I'm **SivaSoorya G.R** — you might know me as **DeadTechGuy**, which is either a brand or a personality disorder, still deciding.\n\nI write about ML, deep learning, and whatever cursed software idea I'm currently elbows-deep in. Some posts are long technical dives. Others are just thoughts too loud to stay in my head and too short to deserve a video. Nowadays I just make AI do the work so I can sleep on slop — until everything falls on my head. 😂\n\nCheck out my work on [GitHub](https://github.com/sivasooryagiri).",
        image: {
            src: hero,
            alt: 'DeadTechGuy workspace setup'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact/'
            }
        ]
    },

    subscribe: {
        enabled: false,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
