// Central editable content. Anything marked [TO ADD] / [TO CONFIRM] still needs Riley's real info.
// Rule: never add metrics, clients, results, tools, or functionality Riley hasn't confirmed.

export const site = {
  name: "Riley Hammond",
  initials: "RH",
  positioning: "Creative thinking. Digital building. Strategic impact.",
  descriptor: "Design · Code · Web Experiences · Marketing",
  intro:
    "I bring together design, coding, web experiences, and marketing to turn ideas into thoughtful, engaging digital experiences. My work bridges creativity and technology — combining visual storytelling, user-centered design, and technical problem-solving to create work that looks good, works well, and has a purpose.",
  aboutShort:
    "I’m studying Emerging Technology in Business and Design at Miami University, with a minor in Digital Marketing — a program that lets me move between design, technology, and strategy every day.",
  aboutLong: [
    "I’m drawn to the space where creativity and technology meet. With experience spanning design, coding, web development, and digital marketing, I enjoy approaching challenges from multiple perspectives — thinking about how something looks, how it works, and how it connects with an audience.",
    "From designing digital experiences and building interactive applications to developing marketing campaigns and creating visual content, I bring a multidisciplinary perspective to every project. I’m interested in what happens when thoughtful design, emerging technology, and strategic thinking work together to turn ideas into meaningful experiences.",
  ],
  // Set real values to enable links. Empty = labeled placeholder.
  email: "riley.digital.creative@gmail.com" as string,
  linkedin: "www.linkedin.com/in/riley-hammond-miamiuniversity" as string,
  // Put the PDF in /public/downloads/ and set e.g. "/downloads/riley-hammond-resume.pdf".
  resumeUrl: "" as string,
  portrait: null as string | null,
};

export const approach = [
  { k: "Idea", t: "Start with curiosity", d: "Concepts, research, and the question behind the brief." },
  { k: "Strategy", t: "Think about the audience", d: "Who it’s for, what they need, and how to reach them." },
  { k: "Design", t: "Shape it visually", d: "Branding, layout, typography, and user-centered interfaces." },
  { k: "Build", t: "Make it work", d: "Code, web pages, prototypes, and interactive technology." },
];

export const education = [
  { school: "Miami University", program: "Emerging Technology in Business and Design", detail: "Minor in Digital Marketing", dates: "Expected graduation · May 2027" },
];

export const experience = [
  {
    role: "Digital Marketing and Design Intern",
    org: "MCA (Marcom Content by Ashley)",
    orgShort: "MCA",
    dates: "March 2026 – August 2026",
    items: [
      "Wrote email copy and created corresponding visuals for recurring email campaigns serving six companies each month.",
      "Created and published HubSpot landing pages for forms, sign-ups, eBooks, and on-demand webinars.",
      "Built recurring landing pages for weekly webinar content as needed.",
      "Wrote blog content and developed content calendars.",
      "Created social media content, profile and bio copy, and story highlights.",
      "Contributed to social content production, typically creating around 10–14 posts per month.",
      "Worked on graphic design and marketing visuals, website updates, SEO research and optimization, and video editing and Reels.",
    ],
  },
];

export const skillAreas = [
  { title: "Creative & Design", note: "How it looks", items: ["Graphic design", "Visual storytelling", "Branding and visual identity", "Layout and typography", "Creative concept development", "Digital content and visual assets"] },
  { title: "Web & Digital Experiences", note: "How it’s experienced", items: ["Web design", "UX/UI design", "Wireframing and prototyping", "Information architecture", "Sitemaps and user workflows", "Website building and updates"] },
  { title: "Coding & Emerging Technology", note: "How it works", items: ["HTML", "CSS", "JavaScript", "Mobile app development", "Interactive digital experiences", "Human-computer interaction", "Exploring emerging technologies through practical problem-solving"] },
  { title: "Marketing & Strategy", note: "How it connects", items: ["Digital marketing", "Social media marketing", "Content calendars and campaign planning", "Email marketing", "Blog writing and content development", "SEO research and optimization", "Creative campaign strategy", "Video and short-form content creation"] },
];

// Featured app-logo grid (About page). Exactly 10, in Riley's order. After Effects intentionally omitted.
export const featuredTools = [
  { label: "Adobe Photoshop", icon: "ps.svg" },
  { label: "Adobe Illustrator", icon: "ai.svg" },
  { label: "Figma", icon: "figma.svg" },
  { label: "Canva", icon: "canva.png" },
  { label: "HTML / CSS / JavaScript", icon: "vscode.svg", alt: "Visual Studio Code" },
  { label: "GitHub", icon: "github.svg" },
  { label: "HubSpot", icon: "hubspot.svg" },
  { label: "Lovable", icon: "lovable.png" },
  { label: "Expo Go", icon: "expo-go.svg" },
  { label: "Adobe Premiere Pro", icon: "pr.svg" },
] as { label: string; icon: string; alt?: string }[];

import heroImage from "@/assets/case-studies/step-inside-a-computer/hero.jpg";
import conceptMoodboard from "@/assets/case-studies/step-inside-a-computer/concept-moodboard.jpg";
import conceptMoodboardTwo from "@/assets/case-studies/step-inside-a-computer/concept-moodboard-2.jpg";
import lofiAnnotatedWireframes from "@/assets/case-studies/step-inside-a-computer/lofi-annotated-wireframes.jpg";
import lowfiHome from "@/assets/case-studies/step-inside-a-computer/lowfi-home.png";
import lofiTicketing from "@/assets/case-studies/step-inside-a-computer/lofi-ticketing.jpg";
import highfiAnnotatedWireframes from "@/assets/case-studies/step-inside-a-computer/highfi-annotated-wireframes.jpg";
import highfiAbout from "@/assets/case-studies/step-inside-a-computer/highfi-about.jpg";
import highfiTicketing from "@/assets/case-studies/step-inside-a-computer/highfi-ticketing.png";
import walkthroughLevel1 from "@/assets/case-studies/step-inside-a-computer/walkthrough-level-1.jpg";
import walkthroughLevel2 from "@/assets/case-studies/step-inside-a-computer/walkthrough-level-2.jpg";
import appWorkflow from "@/assets/case-studies/step-inside-a-computer/app-workflow.jpg";
import siteMap from "@/assets/case-studies/step-inside-a-computer/site-map.jpg";

export const toolGroups = [
  { title: "Web & Development", tools: ["HTML", "CSS", "JavaScript", "GitHub", "Lovable", "Expo Go", "Squarespace"] },
  { title: "Marketing & Content", tools: ["HubSpot", "SEO research and optimization tools", "Email marketing", "Social media content creation", "Content calendars", "Blog writing", "Short-form video and Reels"] },
  { title: "Collaboration & Productivity", tools: ["Miro", "Microsoft Teams", "Slack", "Google Slides", "Google Sheets", "ChatGPT"] },
];

export type Status = "Completed" | "In Progress" | "Planned" | "To confirm";

export type Chapter = {
  title: string;
  body?: string;
  status?: Status;
  assets?: Asset[];
};

export type Asset = string | { label: string; src?: string };

export type Concept = {
  title: string;
  summary: string;
  audience: string;
  impact: string;
  designLanguage: string;
  fontAndColor: string;
  pros: string;
  considerations: string;
  image?: string;
};

export type StepInsideSection = {
  concepts: Concept[];
  walkthroughs: { title: string; image: string; caption: string }[];
  aiExplorations: { platform: string; image?: string; evaluation: string }[];
  heroPrototypes: { label: string; image?: string; caption?: string }[];
  informationArchitecture: {
    sitemap: string;
    workflow: string;
    wireframe?: string;
    sitemapCaption: string;
    workflowCaption: string;
  };
  lowFidelity: { label: string; image?: string; caption?: string }[];
  lowFidelityOverview?: string;
  highFidelity: { label: string; image?: string; caption?: string }[];
  highFidelityOverview?: string;
  prototypeUrl?: string;
};

export type AppEntry = { title: string; assignment: string; description: string; tech: string[]; learned: string };

export type CaseStudy = {
  slug: "step-inside-a-computer" | "hands-free-recipe-navigator" | "butterfield-farm-market" | "mobile-app-development";
  title: string;
  type: string;
  status: Status;
  featured: boolean;
  summary: string;
  categories: string[];
  facts: { k: string; v: string }[];
  heroImage?: string;
  problem: string;
  goals: string;
  role: string;
  contributions: string[];
  tools: string[];
  chapterLabel: string;
  chapters: Chapter[];
  apps?: AppEntry[];
  reflection: string;
  stepInside?: StepInsideSection;
};

const TBA = "[TO ADD]";

export const caseStudies: CaseStudy[] = [
  {
    slug: "step-inside-a-computer",
    title: "Step Inside a Computer",
    type: "UX/UI · Experience Design",
    status: "In Progress",
    featured: true,
    summary: "An experience-design concept that translates a complex subject — how a computer works on the inside — into a thoughtful, engaging journey.",
    categories: ["UX/UI design", "Experience design", "Information architecture", "Moodboards & wireframes", "User workflows & sitemaps"],
    facts: [{ k: "Type", v: "Experience design concept" }, { k: "Course", v: "Intermediate Interaction Design" }, { k: "Year", v: "2026" }],
    heroImage,
    problem: `${TBA} — the challenge of explaining a complex, invisible system in a way that feels approachable and engaging.`,
    goals: `${TBA} — project goals and intended audience.`,
    role: TBA,
    contributions: ["Concept moodboard", "Low- and high-fidelity wireframes in Figma", "App workflow", "Sitemap and information architecture"],
    tools: ["Figma"],
    chapterLabel: "From concept to interface",
    stepInside: {
      concepts: [
        {
          title: "Concept One",
          summary: "A guided exhibit experience that introduces how a computer works through a physical, visitor-led journey.",
          audience: TBA,
          impact: TBA,
          designLanguage: "Exploratory, educational, and immersive.",
          fontAndColor: TBA,
          pros: TBA,
          considerations: TBA,
          image: conceptMoodboard,
        },
        {
          title: "Concept Two",
          summary: "A second direction for translating the computer’s internal systems into an approachable interactive experience.",
          audience: TBA,
          impact: TBA,
          designLanguage: "Clear, playful, and systems-oriented.",
          fontAndColor: TBA,
          pros: TBA,
          considerations: TBA,
          image: conceptMoodboardTwo,
        },
      ],
      walkthroughs: [
        {
          title: "Level 1 exhibit walkthrough",
          image: walkthroughLevel1,
          caption: "The first level maps the visitor’s path through the exhibit and its introductory tasks.",
        },
        {
          title: "Level 2 exhibit walkthrough",
          image: walkthroughLevel2,
          caption: "The second level continues the exhibit journey with the next set of interactive tasks.",
        },
      ],
      aiExplorations: [
        {
          platform: TBA,
          image: heroImage,
          evaluation: TBA,
        },
        {
          platform: TBA,
          evaluation: TBA,
        },
      ],
      heroPrototypes: [
        { label: "Hero prototype 1", caption: TBA },
        { label: "Hero prototype 2", caption: TBA },
        { label: "Hero prototype 3", caption: TBA },
      ],
      informationArchitecture: {
        sitemap: siteMap,
        workflow: appWorkflow,
        sitemapCaption: "The sitemap maps the website structure and visitor progression through the two levels, including exhibit tasks, error-clearing success states, and the final large-screen interaction after all ten errors are cleared.",
        workflowCaption: "The app workflow maps navigation through the app screens and buttons, eventually returning the visitor to the homepage.",
      },
      lowFidelity: [
        { label: "Home", image: lowfiHome },
        { label: "About" },
        { label: "Ticketing", image: lofiTicketing },
      ],
      lowFidelityOverview: lofiAnnotatedWireframes,
      highFidelity: [
        { label: "Home" },
        { label: "About", image: highfiAbout },
        { label: "Ticketing", image: highfiTicketing },
      ],
      highFidelityOverview: highfiAnnotatedWireframes,
    },
    chapters: [
      { title: "Overview & concept", body: TBA },
      { title: "Concept moodboard", assets: [{ label: "Moodboard", src: conceptMoodboard }] },
      { title: "Low-fidelity wireframes", assets: [
        { label: "Lo-fi annotated wireframes", src: lofiAnnotatedWireframes },
        { label: "Lo-fi about screen" },
      ] },
      { title: "High-fidelity wireframes", assets: [{ label: "Hi-fi home screen" }] },
      { title: "App workflow", assets: [
        { label: "Walkthrough level 1", src: walkthroughLevel1 },
        { label: "Walkthrough level 2", src: walkthroughLevel2 },
        { label: "App workflow", src: appWorkflow },
      ] },
      { title: "Sitemap & information architecture", assets: [{ label: "Sitemap", src: siteMap }] },
      { title: "Research & planning artifacts", body: TBA },
    ],
    reflection: `${TBA} — final concept, key decisions, and what I learned.`,
  },
  {
    slug: "hands-free-recipe-navigator",
    title: "Hands-Free Recipe Navigator",
    type: "Mobile · Emerging Technology",
    status: "To confirm",
    featured: true,
    summary: "A CoLab mobile interaction project exploring hand detection so cooks can move through a recipe without touching their screen.",
    categories: ["Mobile app development", "Emerging technology", "Hand-detection interactions", "Accessibility", "Text-to-speech"],
    facts: [{ k: "Type", v: "Mobile interaction project" }, { k: "Context", v: "CoLab" }, { k: "Year", v: TBA }],
    problem: "Following a recipe while cooking is awkward: hands are messy or busy, and touching a phone or tablet interrupts the work.",
    goals: `${TBA} — intended users and project goals.`,
    role: TBA,
    contributions: [TBA],
    tools: [TBA],
    chapterLabel: "Features — implemented vs. planned",
    chapters: [
      { title: "Hand detection & gesture controls", status: "To confirm", body: "Gestures detected by the camera control the app instead of touch." },
      { title: "Scrolling through recipe steps", status: "To confirm", body: "Move forward and back between steps hands-free." },
      { title: "Marking steps complete", status: "To confirm", body: "Check off steps as you finish them." },
      { title: "Text-to-speech", status: "To confirm", body: "Steps can be read aloud so the cook doesn’t need to look at the screen." },
      { title: "App workflow & interface design", assets: ["Workflow diagram", "Interface screens"] },
      { title: "Technical implementation", body: `${TBA} — only details you confirm.` },
      { title: "Testing, challenges & future improvements", body: TBA },
    ],
    reflection: `${TBA} — how user needs shaped design and technology decisions.`,
  },
  {
    slug: "butterfield-farm-market",
    title: "Butterfield Farm Market Campaign",
    type: "Social Media · Campaign Strategy",
    status: "In Progress",
    featured: true,
    summary: "An integrated social media campaign for a local farm market in Oxford, Ohio — from owner interviews and strategy to original video and publishing.",
    categories: ["Social media marketing", "Campaign strategy", "Brand storytelling", "Content creation & video", "Social publishing"],
    facts: [{ k: "Type", v: "Integrated social campaign" }, { k: "Client", v: "Butterfield Farm Market · Oxford, Ohio" }, { k: "Year", v: TBA }],
    problem: `${TBA} — the farm market’s current social presence and opportunity.`,
    goals: `${TBA} — audience and SMART objectives once finalized.`,
    role: "Strategy, interviews, footage, and content production",
    contributions: ["Gathering original footage", "Interviewing the owners", "Developing the campaign strategy", "Preparing content for the farm’s social channels"],
    tools: [TBA],
    chapterLabel: "Research → strategy → execution → evaluation",
    chapters: [
      { title: "Brand & audience overview", status: "In Progress", assets: ["Brand overview"] },
      { title: "Owner interviews & insights", status: "In Progress", assets: ["Interview notes / quotes"] },
      { title: "PESO model", status: "In Progress", assets: ["PESO model"] },
      { title: "MICO + PESTLE analysis", status: "In Progress", assets: ["MICO + PESTLE"] },
      { title: "SWOT analysis", status: "In Progress", assets: ["SWOT"] },
      { title: "TOWS strategy", status: "In Progress", assets: ["TOWS"] },
      { title: "SMART objectives", status: "In Progress", assets: ["Objectives"] },
      { title: "Campaign plan & content calendar", status: "In Progress", assets: ["Content calendar"] },
      { title: "Creative direction & production", status: "In Progress", assets: ["Creative direction board"] },
      { title: "Video & photography", status: "In Progress", assets: ["Video still", "Photo"] },
      { title: "Social posts & publishing", status: "Planned", assets: ["Published post"] },
      { title: "Evaluation & results", status: "Planned", body: "Verified results will be added once the campaign runs." },
    ],
    reflection: "Lessons learned and next steps will be added as the campaign progresses.",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    type: "Mobile · Coursework Collection",
    status: "In Progress",
    featured: false,
    summary: "A curated, growing collection of the strongest apps from my mobile app development class.",
    categories: ["Mobile apps", "Coding", "Interaction"],
    facts: [{ k: "Type", v: "Curated collection" }, { k: "Context", v: "Mobile app development course" }, { k: "Year", v: "2026" }],
    problem: "Each entry starts from a class assignment.",
    goals: "Show range and growth across the semester.",
    role: "Designer and developer",
    contributions: ["Designed and built each app"],
    tools: [TBA],
    chapterLabel: "Selected apps",
    chapters: [],
    apps: [
      { title: "[App 1 — TO ADD]", assignment: TBA, description: TBA, tech: [TBA], learned: TBA },
      { title: "[App 2 — TO ADD]", assignment: TBA, description: TBA, tech: [TBA], learned: TBA },
    ],
    reflection: "This collection will grow as the semester continues.",
  },
];

export const featuredStudies = caseStudies.filter((c) => c.featured);
