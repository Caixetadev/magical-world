import { IProject, ITimeline, ITestimonial } from "../interfaces";

export const allProjects: IProject[] = [
  {
    title: "PRAEY",
    description:
      "The personal website for Tapiwanashe - a writer and film maker. Made to better reflect her.",
    image: "/images/tlh.png",
    tags: ["Next.js", "Contentful", "TailwindCSS"],
    source: "https://github.com/Psypher1/the-language-hub",
    visit: "https://tapiwanashe.com/",
    id: 1,
  },
  {
    title: "The Language Hub",
    description:
      "A language reference book. This was a submission for a hackathon",
    image: "/images/tlh.png",
    tags: ["Next.js", "TailwindCSS", "Markdown"],
    source: "https://github.com/Psypher1/the-language-hub",
    visit: "https://thelanguagehub.netlify.app/",
    id: 2,
  },
  {
    title: "Monoqo Designs",
    description:
      "The site for a branding company. This was built to client's specifications. They came with a design, I brought it to life.",
    image: "/images/monoqo.png",
    tags: ["HTML5", "SASS", "JavaScript"],
    source: "https://github.com/Psypher1/",
    visit: "https://monoqo.netlify.app/",
    id: 3,
  },
  {
    title: "Comexposed Events",
    description:
      "This app lists out a number of events. Allows adding of events. This is the current version. Refactoring is still in progress",
    image: "/images/comexposed.png",
    tags: ["Nextjs", "MongoDB", "TailwindCSS"],
    source: "https://github.com/Psypher1/comexposed-events",
    visit: "https://comexposed-events.vercel.app/",
    id: 4,
  },
  {
    title: "Chouette Hosting",
    description:
      "The frontend for a French Hosting company. A decision for the backend is still to be made",
    image: "/images/chouette.png",
    tags: ["HTML5", "SASS", "Javascript"],
    source: "https://github.com/Psypher1/chouette-website",
    visit: "https://chouettehosting.netlify.app/",
    id: 5,
  },
  {
    title: "Marketing Republik",
    description:
      "A concept site built as a improvement on the current site the company has",
    image: "/images/market.png",
    tags: ["HTML5", "SASS", "JavaScript"],
    source: "https://github.com/Psypher1/marketing-republik",
    visit: "https://marketingrepublik.netlify.app/",
    id: 6,
  },

  {
    title: "Task App with Users",
    description:
      "This implements user creating, filtering of task by user and searchin of tasks. No live version is available",
    image: "/images/tasks.png",
    tags: ["Python", "Django"],
    source: "https://github.com/Psypher1/django-todo-with-users",
    visit: "https://github.com/Psypher1/",
    id: 7,
  },
];

export const TestimonialData: ITestimonial[] = [
  { name: "Tapiwa", message: "great work" },
  { name: "Kuziwa", message: "good job" },
];

export const TimeLineData: ITimeline[] = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Instructed a student for exams" },
  { year: 2019, text: "Tutored a class for languages studies" },
  { year: 2019, text: "Shared my projects with the world" },
  { year: 2020, text: "Did freelance work on Upwork" },
  { year: 2021, text: "Started working with TYPO3" },
  { year: 2022, text: "Participated in first hackathon" },
];

export const AchievementsData = [
  { number: 20, text: "Projects" },
  { number: 10, text: "Students" },
  { number: 200, text: "Wordpress Followers" },
  { number: 3000, text: "Lines of code" },
];
