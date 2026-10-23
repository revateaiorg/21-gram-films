import type { Project, Service, Metric, FAQ, ProcessStep, MediaItem } from '../types';

export const HERO_DATA = {
  location: "CHENNAI / INDIA",
  tagline: "DIGITAL × FILMS × CONTENT",
  headlineLine1: "BRANS SHOULD",
  headlineLine2: "HAVE",
  headlineLine3: "WEIGHT.",
  subheadline: "Films, digital experiences and content built to make your brand impossible to overlook.",
  primaryCTA: "START A PROJECT",
  secondaryCTA: "VIEW OUR WORK"
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "ibel-infra",
    title: "iBel Infra",
    category: "INTERIOR / AERIAL / CONTENT",
    year: "2026",
    description: "Architectural visual storytelling system highlighting structural precision, spatial lighting, and luxury environmental aesthetics.",
    services: ["Interior Shoot", "Exterior Shoot", "Aerial Drone", "Social Content"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
    ],
    badge: "FEATURED CASE STUDY",
    featured: true
  },
  {
    id: "setsquare",
    title: "Set Square Structurals",
    category: "BRANDING / WEB / SEO",
    year: "2025",
    description: "High-performance digital platform and industrial branding strategy built to command authority in heavy engineering.",
    services: ["Brand Identity", "Web Architecture", "Technical SEO", "Copywriting"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "raack-academy",
    title: "Raack Academy of Dance",
    category: "WEB / SOCIAL / REELS",
    year: "2026",
    description: "Dynamic visual campaign and high-tempo reel production capturing movement, energy, and community performance.",
    services: ["Motion Design", "Reels Production", "Website Development", "Social Growth"],
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "little-spartans",
    title: "Little Spartans",
    category: "CONTENT / ADS / FILMS",
    year: "2025",
    description: "Cinematic commercial series and emotional performance campaign for youth fitness and discipline development.",
    services: ["Commercial Film", "Ad Creative", "Social Distribution", "Post-Production"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "pr-bites",
    title: "PR Bites",
    category: "BRANDING / FILMS / SEO",
    year: "2026",
    description: "Editorial culinary content, brand identity redesign, and automated local search presence.",
    services: ["Food Cinematography", "Brand Strategy", "Local SEO", "Packaging Design"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "level-up-academy",
    title: "Level Up Academy",
    category: "SOCIAL / SHOOTS / BRANDING",
    year: "2025",
    description: "Educational media platform and studio content production pipeline for next-generation creative skills.",
    services: ["Studio Shoots", "Social Management", "Brand Identity", "Course Video Editing"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop"
    ]
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "web-dev",
    number: "01",
    title: "WEB DESIGN & DEVELOPMENT",
    description: "We design and build websites that look sharp, load fast and turn attention into action. From custom layouts to clean, scalable code, every page is crafted to reflect your brand and convert visitors into customers.",
    tags: ["Design", "Development", "CMS", "Performance", "SEO"],
    iconName: "Globe"
  },
  {
    id: "backend-maint",
    number: "02",
    title: "BACKEND & MAINTENANCE",
    description: "Reliable digital infrastructure behind every experience we launch.",
    tags: ["Hosting", "Monitoring", "Security", "Backups", "Maintenance"],
    iconName: "Server"
  },
  {
    id: "social-media",
    number: "03",
    title: "SOCIAL MEDIA",
    description: "Content systems that give your brand something worth saying — consistently.",
    tags: ["Content Strategy", "Reels", "Campaigns", "Community", "Analytics"],
    iconName: "Share2"
  },
  {
    id: "films-shoots",
    number: "04",
    title: "FILMS & IN-HOUSE SHOOTS",
    description: "From product films to brand stories, reels and commercial content.",
    tags: ["Brand Films", "Commercials", "Reels", "Photography", "Post-production"],
    iconName: "Video"
  },
  {
    id: "seo-traffic",
    number: "05",
    title: "SEO & TRAFFIC",
    description: "Make the attention you earn keep working long after the campaign ends.",
    tags: ["Technical SEO", "Keywords", "On-page", "Content", "Reporting"],
    iconName: "TrendingUp"
  }
];

export const METRICS_DATA: Metric[] = [
  {
    id: "campaigns",
    value: "80+",
    label: "CAMPAIGNS SHIPPED",
    description: "Executed with high creative precision across digital & social."
  },
  {
    id: "brands",
    value: "40+",
    label: "BRANDS LAUNCHED",
    description: "Positioned, designed and deployed from scratch."
  },
  {
    id: "impressions",
    value: "12M+",
    label: "IMPRESSIONS DRIVEN",
    description: "Organic and paid visual content reach."
  },
  {
    id: "uptime",
    value: "99.9%",
    label: "SITE UPTIME",
    description: "Enterprise-grade digital infrastructure."
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVERY",
    subtitle: "Understanding the Core",
    description: "Understand the business, audience, challenge and opportunity before writing a line of code or setting up a camera.",
    iconName: "Search"
  },
  {
    number: "02",
    title: "STRATEGY",
    subtitle: "The Creative Blueprint",
    description: "Turn the brief into a clear creative and channel direction with precise visual guidelines and platform targets.",
    iconName: "Layers"
  },
  {
    number: "03",
    title: "PRODUCTION",
    subtitle: "Crafting the Vision",
    description: "Direction, design, development, shooting and post-production executed together under one unified studio roof.",
    iconName: "Camera"
  },
  {
    number: "04",
    title: "LAUNCH & GROWTH",
    subtitle: "Compounding Impact",
    description: "Ship the work, measure what happens with real analytics, and keep improving what performs.",
    iconName: "Rocket"
  }
];

export const FAQ_DATA: FAQ[] = [
  {
    id: "faq-1",
    number: "01",
    question: "What kind of projects does 21GRAM work on?",
    answer: "We work on brand films, high-converting websites, social media content engines, digital marketing campaigns, architectural cinematography, and complete brand identity launches."
  },
  {
    id: "faq-2",
    number: "02",
    question: "Do you handle both production and post-production?",
    answer: "Yes. We own the entire production pipeline from concept scripts, storyboards, lighting, and multi-camera shoots to color grading, sound design, VFX, and final export formats."
  },
  {
    id: "faq-3",
    number: "03",
    question: "Can you build the website and create the content for it?",
    answer: "That is our exact core strength. Instead of hiring separate agencies for web development and video shoots, 21GRAM produces the visuals, videos, copy, and code simultaneously so everything fits seamlessly."
  },
  {
    id: "faq-4",
    number: "04",
    question: "Do you manage social media after producing the content?",
    answer: "Yes, we build recurring monthly social systems: editing short-form reels, managing posting calendars, optimizing platform algorithms, and tracking performance analytics."
  },
  {
    id: "faq-5",
    number: "05",
    question: "Can you work with an existing brand team?",
    answer: "Absolutely. We often act as an extended creative & production department for internal marketing leads, founders, or in-house brand teams."
  },
  {
    id: "faq-6",
    number: "06",
    question: "Where are you based?",
    answer: "Our physical studio is located in Saligramam, Chennai, India. We execute on-location shoots across India and build digital projects globally."
  },
  {
    id: "faq-7",
    number: "07",
    question: "How do we start a project?",
    answer: "Simply reach out via our contact form or call us directly. We will schedule a discovery call within 24 hours to review your requirements, timelines, and strategic goals."
  }
];

// Local video file — place the downloaded reel inside public/videos/
// Vite serves the public/ folder at the root, so /videos/reel.mp4 works directly.
// When you get individual client videos, drop them in public/videos/ and update each videoUrl below.
const DRIVE_REEL_URL = "/videos/reel1.mp4";

export const CONTENT_SHOWCASE_DATA: MediaItem[] = [
  {
    id: "reel-1",
    title: "Architectural Perspective — iBel",
    client: "iBel Infra",
    category: "BRAND FILM",
    type: "film",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
    videoUrl: "/videos/reel1.mp4",
    embedUrl: "https://www.instagram.com/reel/DbKWU0vskMK/",
    views: "240K",
    year: "2026"
  },
  {
    id: "reel-2",
    title: "Rhythm & Movement — Raack",
    client: "Raack Academy",
    category: "REEL",
    type: "reel",
    thumbnail: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop",
    videoUrl: "/videos/reel2.mp4",
    embedUrl: "https://www.instagram.com/reel/DbKWU0vskMK/",
    views: "1.2M",
    year: "2026"
  },
  {
    id: "reel-3",
    title: "Engineering Strength — Set Square",
    client: "Set Square",
    category: "WEBSITE PREVIEW",
    type: "website",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    videoUrl: "/videos/reel3.mp4",
    embedUrl: "https://www.instagram.com/reel/DbKWU0vskMK/",
    views: "95K",
    year: "2025"
  },
  {
    id: "reel-4",
    title: "Power & Youth — Little Spartans",
    client: "Little Spartans",
    category: "CAMPAIGN CLIP",
    type: "reel",
    thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    videoUrl: "/videos/reel4.mp4",
    embedUrl: "https://www.instagram.com/reel/DbKWU0vskMK/",
    views: "580K",
    year: "2025"
  },
  {
    id: "reel-5",
    title: "Culinary Depth — PR Bites",
    client: "PR Bites",
    category: "PHOTOGRAPHY",
    type: "shoot",
    thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop",
    videoUrl: "/videos/reel5.mp4",
    embedUrl: "https://www.instagram.com/reel/DbKWU0vskMK/",
    views: "310K",
    year: "2026"
  }
];