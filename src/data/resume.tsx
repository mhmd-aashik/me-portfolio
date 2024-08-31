import { Icons } from "@/components/icons";
import navbar from "@/components/navbar";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aashik",
  initials: "DV",
  url: "https://www.aashikdev.com",
  location: "Colombo, Sri Lanka",
  description: "Software Engineer - Full Stack Developer - UI/UX Designer",
  summary: `I am a seasoned Full-Stack Developer with extensive experience in JavaScript libraries such as React, coupled with a strong foundation in UI/UX design using industry-leading tools like Figma and Adobe XD. My proficiency extends to modern frameworks including Next.js, Node.js, and MongoDB, where I focus on crafting scalable and efficient solutions tailored to meet client needs.

  With a deep understanding of product management, I am passionate about leveraging technology to solve complex problems, transforming ideas into innovative, user-centric products. My holistic approach to development ensures seamless integration between front-end and back-end, creating exceptional digital experiences.`,
  avatarUrl: "/me.png",
  frontEndSkills: [
    "Html",
    "Css",
    "JavaScript",
    "React",
    "Next.js",
    "Typescript",
    "TailwindCSS",
    "Boostrap",
    "Material UI",
    "Redux",
    "Zustand",
    "Sass",
    "Scss",
    "Styled Components",
    "Recoil",
    "Git",
    "Github",
    "Three.js",
    "React Query",
  ],

  backEndSkills: [
    "Node.js",
    "Express.js",
    "Nest.js",
    "GraphQL",
    "Stepzen",
    "Apollo",
    "Java",
    "Python",
  ],

  mobileSkills: ["React Native"],

  dataBaseSkills: [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Sql",
    "Firebase",
    "DynamoDB",
    "SQLite",
    "TursoDB",
    "Supabase",
    "NeonDB",
    "Appwrite",
    "Canvex",
  ],

  designSkills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva"],

  ormSkills: ["Prisma", "TypeORM", "Mongoose", "Drizzle"],
  packageSkills: ["npm", "yarn", "pnpm"],
  paymentSkills: ["Stripe", "Lemon Squeezy", "Paypal"],
  apiSkills: ["REST", "GraphQL"],
  authSkills: [
    "JWT",
    "OAuth",
    "Firebase Auth",
    "NextAuth",
    "Supabase Auth",
    "Lusia Auth",
    "AppWrite Auth",
  ],
  otherSkills: ["Chat Gpt", "OpenAI", "Post Man", "Insomnia", "Docker"],
  testingSkills: ["React Testing Library", "Cypress"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aashikdevelop@gmail.com",
    tel: "+94 774108640",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mhmd-aashik",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aashikdev/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/mhmd_aashik/",
        icon: Icons.instagram,

        navbar: true,
      },

      X: {
        name: "X",
        url: "https://x.com/aashik36660",
        icon: Icons.x,

        navbar: true,
      },
      Gmail: {
        name: "Send Email",
        url: "https://mail.google.com/mail/u/0/#inbox?compose=new",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Ranga Tecnologies",
      badges: [],
      location: "Remote",
      title: "Associate Full Stack Developer",
      logoUrl: "/images/ranga.png",
      start: "May 2024",
      end: "Precent",
      description: `I developed and maintained web applications using React, Next.js, and Node.js, designed and implemented RESTful APIs and GraphQL services, and optimized applications for maximum speed and scalability. I collaborated with clients to deliver custom solutions tailored to their business needs, utilizing technologies such as Next.js, React.js, MongoDB, TypeScript, and TailwindCSS.`,
    },
    {
      company: "JSM Masterclass Experience",
      badges: [],
      location: "Remote",
      title: "Fullstack Developer",
      logoUrl: "/images/js.png",
      start: "January 2024",
      end: "March 2024",
      description: `"Mastering Modern Web Development with a Project-Based Approach: Building a Full-Stack Enterprise Application" is a JavaScript masterclass designed to provide an immersive, hands-on learning experience. Throughout this course, you'll work on real-world projects that encompass both front-end and back-end development, utilizing the latest JavaScript frameworks and tools.

      The course covers a comprehensive curriculum that delves into modern JavaScript, including ES6+ features and best practices. You'll learn front-end development with React.js, focusing on building responsive and dynamic user`,
    },
    {
      company: "Mentor at Zero to Full Stack Hero by Sonny Sangha",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/images/papa.webp",
      start: "November 2022",
      end: "Present",
      description: `I took the lead in developing team communications and information for meetings, ensuring that all stakeholders were well-informed and aligned. By spearheading projects and thoroughly analyzing data, I identified key opportunities for improvement, driving both efficiency and effectiveness within the team.

        My strong critical thinking skills enabled me to deconstruct complex problems, evaluate potential solutions, and make informed decisions that benefited the organization. Through meticulous coordination and planning, I consistently achieved results on schedule, demonstrating my ability to manage projects effectively.

        In my role, I worked closely with mentees (other devs) to understand their needs and deliver exceptional coaching, tailoring my approach to meet their individual goals. By prioritizing tasks effectively and maintaining a strong work ethic, I consistently exceeded set targets, contributing to the overall success of the team.`,
    },
    {
      company: "Fiverr && Upwork",
      badges: [],
      location: "FreeLancer",
      title: "FrontEnd Developer",
      logoUrl: "/images/fiverr.jpeg",
      start: "Augest 2022",
      end: "November 2023",
      description: "I have worked on multiple projects on Fiverr and Upwork.",
    },
  ],
  education: [
    {
      school: "Kingston University",
      href: "https://www.kingston.ac.uk/",
      degree:
        "BSc (Hons) Computing Science in Software Engineering (TOP UP) (READING)",
      logoUrl: "/images/kingston.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "Buckinghamshire New University",
      href: "https://www.bucks.ac.uk/",
      degree: "EdHat International Higher Diploma in Software Development",
      logoUrl: "/images/bugs.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "Winsys City Campus  ( Col 04 )",
      href: "https://winsys.lk/",
      degree: "Diploma in Information and Communication Technology ",
      logoUrl: "/images/w.jpg",
      start: "2019",
      end: "2020",
    },
  ],
  //   projects: [
  //     {
  //       title: "Chat Collect",
  //       href: "https://chatcollect.com",
  //       dates: "Jan 2024 - Feb 2024",
  //       active: true,
  //       description:
  //         "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
  //       technologies: [
  //         "Next.js",
  //         "Typescript",
  //         "PostgreSQL",
  //         "Prisma",
  //         "TailwindCSS",
  //         "Stripe",
  //         "Shadcn UI",
  //         "Magic UI",
  //       ],
  //       links: [
  //         {
  //           type: "Website",
  //           href: "https://chatcollect.com",
  //           icon: <Icons.globe className="size-3" />,
  //         },
  //       ],
  //       image: "",
  //       video:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  //     },
  //     {
  //       title: "Magic UI",
  //       href: "https://magicui.design",
  //       dates: "June 2023 - Present",
  //       active: true,
  //       description:
  //         "Designed, developed and sold animated UI components for developers.",
  //       technologies: [
  //         "Next.js",
  //         "Typescript",
  //         "PostgreSQL",
  //         "Prisma",
  //         "TailwindCSS",
  //         "Stripe",
  //         "Shadcn UI",
  //         "Magic UI",
  //       ],
  //       links: [
  //         {
  //           type: "Website",
  //           href: "https://magicui.design",
  //           icon: <Icons.globe className="size-3" />,
  //         },
  //         {
  //           type: "Source",
  //           href: "https://github.com/magicuidesign/magicui",
  //           icon: <Icons.github className="size-3" />,
  //         },
  //       ],
  //       image: "",
  //       video: "https://cdn.magicui.design/bento-grid.mp4",
  //     },
  //     {
  //       title: "llm.report",
  //       href: "https://llm.report",
  //       dates: "April 2023 - September 2023",
  //       active: true,
  //       description:
  //         "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
  //       technologies: [
  //         "Next.js",
  //         "Typescript",
  //         "PostgreSQL",
  //         "Prisma",
  //         "TailwindCSS",
  //         "Shadcn UI",
  //         "Magic UI",
  //         "Stripe",
  //         "Cloudflare Workers",
  //       ],
  //       links: [
  //         {
  //           type: "Website",
  //           href: "https://llm.report",
  //           icon: <Icons.globe className="size-3" />,
  //         },
  //         {
  //           type: "Source",
  //           href: "https://github.com/dillionverma/llm.report",
  //           icon: <Icons.github className="size-3" />,
  //         },
  //       ],
  //       image: "",
  //       video: "https://cdn.llm.report/openai-demo.mp4",
  //     },
  //     {
  //       title: "Automatic Chat",
  //       href: "https://automatic.chat",
  //       dates: "April 2023 - March 2024",
  //       active: true,
  //       description:
  //         "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
  //       technologies: [
  //         "Next.js",
  //         "Typescript",
  //         "PostgreSQL",
  //         "Prisma",
  //         "TailwindCSS",
  //         "Shadcn UI",
  //         "Magic UI",
  //         "Stripe",
  //         "Cloudflare Workers",
  //       ],
  //       links: [
  //         {
  //           type: "Website",
  //           href: "https://automatic.chat",
  //           icon: <Icons.globe className="size-3" />,
  //         },
  //       ],
  //       image: "",
  //       video:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
  //     },
  //   ],
} as const;
