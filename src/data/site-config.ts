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
    subtitle: 'DTG Creator | Co-Founder Soluto.',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
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
    title: 'DeadTechGuy — Welcome to my small rentefree corner of the internet.',
    text: "I'm **SivaSoorya**, the mind behind DeadTechGuy.\nI use this space to explore machine learning, deep learning, technology, and the ideas shaping modern software.\nSome posts are deep technical dives, others are short thoughts that don’t need a full video — just honest learning shared in public.\n\nYou can explore my work, experiments, and projects as I continue building and learning in real time.\n\nCheck out my work on [GitHub](https://github.com/sivasooryagiri).",
    image: {
        src: hero,
        alt: 'DeadTechGuy workspace setup'
    },
    actions: [
        {
            text: 'Get in Touch',
            href: '/contact'
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
