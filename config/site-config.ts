export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"|"4x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project"|"experience"|"skills";
export type EqiupmentItem = {
    title: string;
    link: string;
};

export interface GridItemInterface {
    layout: GridItemLayout;
    type: GridItemType;
    title: string;
    icon?: string;
    username?: string;
    description?: string;
    color?: string;
    buttonTitle?: string;
    buttonLink?: string;
    buttonSecondaryText?: string;
    /* Mentor */
    promotion?: string;
    price?: string;
    oldPrice?: string;
    /* Project */
    stars?: number;
    /* Equipments */
    equipments?: EqiupmentItem[];
    image?: string;
}


const GridItems: GridItemInterface[] = [
    {
        layout: "2x2",
        type: "social",
        title: "LinkedLift - Improve your linkedin profile",
        icon: "github",
        color: "#0077b5",
        buttonTitle: "Visit",
        buttonLink: "https://linkedlift.asimadnan.com/",
        // buttonSecondaryText: "1.1K",
    },
    {
        layout: "2x2",
        type: "social",
        title: "Sales Call Analysis with LLM",
        icon: "github",
        color: "#0077b5",
        buttonTitle: "Visit",
        buttonLink: "https://sales-call.streamlit.app/",
        // buttonSecondaryText: "1.1K",
    },
    {
        layout: "2x2",
        type: "social",
        title: "Style My Avatar - AI Avatar Generator",
        icon: "github",
        color: "#0077b5",
        buttonTitle: "Visit",
        buttonLink: "https://stylemyavatar.com/",
        // buttonSecondaryText: "1.1K",
    },
    {
        layout: "2x2",
        type: "social",
        title: "Customer Comment/Review Analysis with LLM",
        icon: "github",
        color: "#0077b5",
        buttonTitle: "Visit",
        buttonLink: "https://github.com/asimadnan/llm-text-categorization",
        // buttonSecondaryText: "1.1K",
    },

    {
        layout: "2x2",
        type: "social",
        title: "Talent Scount - AI Agent",
        icon: "github",
        color: "#0077b5",
        buttonTitle: "Visit",
        buttonLink: "https://github.com/asimadnan/talentscout-ai",
        // buttonSecondaryText: "1.1K",
    },
    {
        layout: "2x2",
        type: "social",
        title: "Youtube Video to Blog Generator",
        icon: "github",
        // username: "asimadnan",
        // description:
        //     "Connect with me on Medium to Read my Blogs",
        color: "#0077b5",
        buttonTitle: "Visit",
        buttonLink: "https://youtube-to-blogpost-asim.streamlit.app/",
        // buttonSecondaryText: "1.1K",
    },
    {
        layout: "2x2",
        type: "social",
        title: "Linkedin Activity to Heatmap Generator",
        icon: "github",
        // username: "asimadnan",
        // description:
        //     "Connect with me on Medium to Read my Blogs",
        color: "#0077b5",
        buttonTitle: "Visit",
        buttonLink: "https://github.com/asimadnan/linkedin-activity-heatmap",
        // buttonSecondaryText: "1.1K",
    },
    
    {
        layout: "2x2",
        type: "social",
        title: "Preferential Voting Visualiser",
        icon: "github",
        color: "#0077b5",
        buttonTitle: "Visit",
        buttonLink: "https://voting.asimadnan.com/",
        // buttonSecondaryText: "1.1K",
    },
    {
        layout: "2x2",
        type: "social",
        title: "Australian Pay Calculator",
        icon: "github",
        color: "#0077b5",
        buttonTitle: "Visit",
        buttonLink: "https://paycalculator.asimadnan.com/",
        // buttonSecondaryText: "1.1K",
    },

   

    {
        layout: "2x2",
        type: "social",
        title: "Working Day Calculator",
        icon: "github",
        // username: "asimadnan",
        // description:
        //     "Connect with me on LinkedIn to explore my professional journey and stay updated on my latest achievements and projects showcased in my portfolio website.",
        color: "#0077b5",
        buttonTitle: "Visit",
        buttonLink: "https://working-days-calculator.vercel.app/",
        // buttonSecondaryText: "1.1K",
    },
    
    
    {
        layout: "2x2",
        type: "social",
        title: "LinkedIn",
        icon: "linkedin",
        username: "asimadnan",
        description:
            "Connect with me on LinkedIn to explore my professional journey and stay updated on my latest achievements and projects showcased in my portfolio website.",
        color: "#0077b5",
        buttonTitle: "Connect With me!",
        buttonLink: "https://www.linkedin.com/in/asimadnan/",
        // buttonSecondaryText: "1.1K",
    },
    {
        layout: "2x2",
        type: "social",
        title: "Medium",
        icon: "medium",
        username: "asimadnan",
        description:
            "Connect with me on Medium to Read my Blogs",
        color: "#0077b5",
        buttonTitle: "Connect With me!",
        buttonLink: "https://medium.com/@asimadnan",
        // buttonSecondaryText: "1.1K",
    },
    //   {
    //     layout: "1x2",
    //     type: "social",
    //     title: "Discord",
    //     icon: "discord",
    //     username: "@makrdev",
    //     buttonTitle: "Join",
    //     buttonLink: "https://discord.com/invite/5aXRp49Q4h",
    //     buttonSecondaryText: "44",
    //     color: "#5865F2",
    //   },
    {
        layout: "2x2",
        type: "social",
        title: "Github",
        icon: "github",
        username: "@asimadnan",
        buttonTitle: "Follow Me!",
        buttonSecondaryText: "",
        buttonLink: "https://github.com/asimadnan",
        color: "#070707",
        description:
            "Click on me to view my open-source projects!",
    },
    {
        layout: "1x2",
        type: "social",
        title: "Twitter",
        icon: "twitter",
        username: "@asimadnan",
        buttonTitle: "Follow",
        buttonLink: "https://twitter.com/asimadnan",
        buttonSecondaryText: "193",
        color: "#1DA1F2",
        description:
            "ML Engineer building in Public!",
    },
    {
        layout: "1x2",
        type: "social",
        title: "Resume",
        icon: "resume",
        username: "",
        buttonTitle: "Download",
        buttonLink: "/files/asimadnan_resume_2024_ai.pdf",
        buttonSecondaryText: "",
        color: "#070707",
        description:
            "Download My resume!",
    },

    {
        layout: "2x2",
        type: "social",
        title: "Calendly",
        icon: "calendly",
        username: "",
        description:
            "Book a 30 min Call with me",
        color: "#070707",
        buttonTitle: "Schedule",
        buttonLink: "https://calendly.com/asimadnan",
        // buttonSecondaryText: "1.1K",
    },
    // {
    //     layout: "2x1",
    //     type: "project",
    //     title: "Sign in with Ethereum",
    //     icon: "github",
    //     color: "#070707",
    //     buttonLink: "https://github.com/asimadnan/SIWE-NextJs-Nestjs",
    //     stars: 1,
    // },
    // {
    //     layout: "2x1",
    //     type: "project",
    //     title: "NestJS JWT Auth template",
    //     icon: "github",
    //     color: "#070707",
    //     stars: 2,

    //     buttonLink: "https://github.com/asimadnan/NestJS-Jwt-AUTH-arangodb",
    // },
    // {
    //     layout: "2x1",
    //     type: "mentor",
    //     title: "Supabase Mentorship",
    //     icon: "superpeer",
    //     promotion: "MAKRDEVFELLOWS",
    //     oldPrice: "$100",
    //     price: "$50",
    //     buttonLink: "https://superpeer.com/makrdev/-/supabase-mentor",
    // },
    
    // {
    //     layout: "2x2",
    //     type: "social",
    //     title: "Restaurant Web3 Membership System NFT ",
    //     username: "Le Vesuvio",
    //     description:
    //         "NFT collection and membership website made for Le Vesuvio restaurant.",
    //     icon: "next",
    //     buttonTitle: "View Project",
    //     buttonSecondaryText: "",
    //     buttonLink:
    //         "https://vesuv.io/",
    // },
    // {
    //     layout: "2x1",
    //     type: "project",
    //     title: "AI Blog Post Generator",
    //     icon: "github",
    //     stars: 19,
    //     color: "#070707",
    //     buttonLink: "https://github.com/batuhanbilginn/ai-blog-post-generator",
    // }
    // ,{
    //     layout: "2x2",
    //     type: "social",
    //     title: "AktionT4 NFT Collection & Backend",
    //     username: "",
    //     description:
    //         "Aktion T4 Blockchain and Backend Development",
    //     icon: "ethereum",
    //     buttonTitle: "View Project",
    //     buttonSecondaryText: "",
    //     buttonLink:
    //         "https://aktionT4.com",
    // },
    // },
    // {
    //     layout: "2x4",
    //     type: "experience",
    //     title: "Professional Experience",
        
    // {
    //     layout: "1x2",
    //     type: "social",
    //     title: "InfinityTools",
    //     username: "",
    //     description:
    //         "A collection of AI tools",
    //     icon: "next",
    //     buttonTitle: "Coming Soon!",
    //     buttonSecondaryText: "",
    //     buttonLink:
    //         "/",
    // },

];

const GridItemsLower: GridItemInterface[] = [
    // {
    //     layout: "2x2",
    //     type: "social",
    //     title: "LinkedIn",
    //     icon: "linkedin",
    //     username: "asimadnan",
    //     description:
    //         "Connect with me on LinkedIn to explore my professional journey and stay updated on my latest achievements and projects showcased in my portfolio website.",
    //     color: "#0077b5",
    //     buttonTitle: "Connect",
    //     buttonLink: "https://www.linkedin.com/in/asimadnan/",
    //     // buttonSecondaryText: "1.1K",
    // },
    //   {
    //     layout: "1x2",
    //     type: "social",
    //     title: "Discord",
    //     icon: "discord",
    //     username: "@makrdev",
    //     buttonTitle: "Join",
    //     buttonLink: "https://discord.com/invite/5aXRp49Q4h",
    //     buttonSecondaryText: "44",
    //     color: "#5865F2",
    //   },
    // {
    //     layout: "2x2",
    //     type: "social",
    //     title: "Github",
    //     icon: "github",
    //     username: "@asimadnan",
    //     buttonTitle: "Follow",
    //     buttonSecondaryText: "",
    //     buttonLink: "https://github.com/asimadnan",
    //     color: "#070707",
    //     description:
    //         "Click on me to view my open-source projects!",
    // },
    // {
    //     layout: "1x2",
    //     type: "social",
    //     title: "Twitter",
    //     icon: "twitter",
    //     username: "@asimadnan",
    //     buttonTitle: "Follow",
    //     buttonLink: "https://twitter.com/asimadnan",
    //     buttonSecondaryText: "193",
    //     color: "#1DA1F2",
    //     description:
    //         "Software Engineer building in Public!",
    // },
    // {
    //     layout: "1x2",
    //     type: "social",
    //     title: "Resume",
    //     icon: "resume",
    //     username: "",
    //     buttonTitle: "Download",
    //     buttonLink: "https://utfs.io/f/f3db2131-47fe-47f2-a80b-6fa0bbea97a9-8a3mok.pdf",
    //     buttonSecondaryText: "",
    //     color: "#070707",
    //     description:
    //         "Download My resume!",
    // },
    // {
    //     layout: "2x1",
    //     type: "project",
    //     title: "Sign in with Ethereum",
    //     icon: "github",
    //     color: "#070707",
    //     buttonLink: "https://github.com/asimadnan/SIWE-NextJs-Nestjs",
    //     stars: 1,
    // },
    // {
    //     layout: "2x1",
    //     type: "mentor",
    //     title: "Next.js Mentorship",
    //     icon: "superpeer",
    //     promotion: "MAKRDEVFELLOWS",
    //     oldPrice: "$100",
    //     price: "$50",
    //     buttonLink: "https://superpeer.com/makrdev/-/nextjs-mentor",
    // },
    // {
    //     layout: "2x1",
    //     type: "mentor",
    //     title: "Supabase Mentorship",
    //     icon: "superpeer",
    //     promotion: "MAKRDEVFELLOWS",
    //     oldPrice: "$100",
    //     price: "$50",
    //     buttonLink: "https://superpeer.com/makrdev/-/supabase-mentor",
    // },

    ,{
        layout: "1x2",
        type: "social",
        title: "ASVSpoof",
        username: "",
        description:
            "Research thesis",
        icon: "resume",
        buttonTitle: "View",
        buttonSecondaryText: "",
        buttonLink:
            "https://figshare.mq.edu.au/articles/thesis/Counter_measure_system_for_automatic_speaker_verification_systems/21482952/1",
    },

    {
        layout: "1x2",
        type: "social",
        title: "Effects of OUD",
        username: "",
        description:
            "Research paper",
        icon: "resume",
        buttonTitle: "View",
        buttonSecondaryText: "",
        buttonLink:
            "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0278988",
    },

    
    // {
    //     layout: "2x2",
    //     type: "social",
    //     title: "Restaurant Web3 Membership System NFT ",
    //     username: "Le Vesuvio",
    //     description:
    //         "NFT collection and membership website made for Le Vesuvio restaurant.",
    //     icon: "next",
    //     buttonTitle: "View Project",
    //     buttonSecondaryText: "",
    //     buttonLink:
    //         "https://vesuv.io/",
    // },
    // {
    //     layout: "1x2",
    //     type: "social",
    //     title: "AI Agency",
    //     username: "",
    //     description:
    //         "Generate Ai employees that you can Chat with!",
    //     icon: "next",
    //     buttonTitle: "Coming Soon!",
    //     buttonSecondaryText: "",
    //     buttonLink:
    //         "/",
    // },
    // {
    //     layout: "2x1",
    //     type: "project",
    //     title: "KnowledgeBase Chat AI Saas ",
    //     icon: "github",
    //     stars: 1,
    //     color: "#070707",
    //     buttonLink: "https://github.com/",
    // }
    // ,{
    //     layout: "2x2",
    //     type: "social",
    //     title: "AktionT4 NFT Collection & Backend",
    //     username: "",
    //     description:
    //         "Aktion T4 Blockchain and Backend Development",
    //     icon: "ethereum",
    //     buttonTitle: "View Project",
    //     buttonSecondaryText: "",
    //     buttonLink:
    //         "https://aktionT4.com",
    // },
    // ,{
    //     layout: "1x2",
    //     type: "social",
    //     title: "NFT GAME 1024",
    //     username: "",
    //     description:
    //         "Smart Contract and Website development of 1024 Blockchain Game",
    //     icon: "ethereum",
    //     buttonTitle: "View Project",
    //     buttonSecondaryText: "",
    //     buttonLink:
    //         "1024-landingpage-tan.vercel.app",
    // },
    // {
    //     layout: "1x2",
    //     type: "social",
    //     title: "Priority Queue Management System",
    //     username: "QueueUp",
    //     description:
    //         "Priority Queue management system built with django",
    //     icon: "django",
    //     buttonTitle: "View Project",
    //     buttonSecondaryText: "",
    //     buttonLink:
    //         "https://github.com/asimadnan/QueueUp",
    // },
    // {
    //     layout: "2x1",
    //     type: "project",
    //     title: "Portfolio Website Source Code",
    //     icon: "github",
    //     stars: 1,
    //     color: "#070707",
    //     buttonLink: "https://github.com/asimadnan/Portfolio-Bento-style",
    // }

    // {
    //     layout:"4x4",
    //     type: "skills",
    //     title: "Skills",
    // }
    // },
    // {
    //     layout: "2x4",
    //     type: "experience",
    //     title: "Professional Experience",
        
 
];



export const siteConfig = {
    creator: "Asim Adnan Eijaz",
    title: "Machine Learning Engineer",
    bio: "Machine Learning Engineer |Generative AI, MLOps | Deep Learning, NLP",
    location: "Sydney, Australia",
    locationLink:
        "",
    email: "me@asimadnan.com",
    items: GridItems,
    itemsLower: GridItemsLower,
} as const;