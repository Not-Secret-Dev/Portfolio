export const profile = {
  name: 'Aayan Mumtaz',
  firstName: 'AAYAN',
  lastName: 'MUMTAZ',
  role: 'Entry-Level Software Developer',
  discipline: 'Computer Information Technology',
  location: 'Lahore, Pakistan',
  email: 'ayaanmumtaz8@gmail.com',
  phone: '+92 329 7528954',
  phoneHref: '+923297528954',
  github: 'https://github.com/Not-Secret-Dev',
  githubHandle: 'Not-Secret-Dev',
  linkedin: 'https://linkedin.com/in/aayan-mumtaz-aba84831a',
  linkedinHandle: 'in/aayan-mumtaz-aba84831a',
  site: 'https://ayaan-dev-portfolio.netlify.app',
  siteLabel: 'ayaan-dev-portfolio.netlify.app',
  cv: '/Aayan_Mumtaz_CV.pdf',
  availability: 'Open to junior, trainee & internship roles',
} as const

export const navItems = [
  { id: 'about', index: '01', label: 'About' },
  { id: 'experience', index: '02', label: 'Experience' },
  { id: 'work', index: '03', label: 'Work' },
  { id: 'toolkit', index: '04', label: 'Toolkit' },
  { id: 'background', index: '05', label: 'Background' },
  { id: 'contact', index: '06', label: 'Contact' },
] as const

export const marqueeStack = [
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'REACT',
  'GIT',
  'GITHUB',
  'LINUX',
  'C',
  'GO',
  'PYTHON',
] as const

export const stats = [
  { value: '03', label: 'Projects shipped' },
  { value: '02', label: 'Professional roles' },
  { value: '10', label: 'Tools in rotation' },
  { value: '03', label: 'Languages spoken' },
] as const

export const about = {
  intro:
    "I'm Aayan — a Computer Information Technology graduate from Lahore at the start of a software career, learning by building small, complete things.",
  body: [
    "I've built small projects in C, Go, and React, and completed a two-month web development internship at Developer'sHub. I'm comfortable reading and understanding code, and I'm currently strengthening my hands-on fundamentals in HTML, CSS, and JavaScript.",
    "I also tutor secondary-level students in computer science basics. Explaining the fundamentals keeps them sharp — and it's a good reminder that if I can't explain something simply, I probably don't understand it yet.",
  ],
} as const

export const principles = [
  {
    title: 'Build to understand',
    body: 'A small finished project teaches more than a large unfinished one — so finish the small ones.',
  },
  {
    title: 'Understand the floor',
    body: 'Allocators, sockets, and file descriptors explain most of the bugs that look mysterious upstairs.',
  },
  {
    title: 'Stay teachable',
    body: 'Feedback is faster than guessing. Ask early, take notes, and keep the next attempt simpler.',
  },
] as const

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  detail: string
  bullets: string[]
  tags: string[]
}

export const experience: Experience[] = [
  {
    company: "Developer'sHub Corporation",
    role: 'Full-Stack Web Developer Intern',
    period: 'Feb 2026 — Mar 2026',
    location: 'Lahore, PK',
    detail: 'Internship',
    bullets: [
      'Built the frontend of an e-commerce store project using React during a two-month internship.',
      'Built a backend for an existing frontend and helped debug frontend and backend issues using Git.',
    ],
    tags: ['React', 'Frontend', 'Backend', 'Git'],
  },
  {
    company: 'Computer Science Tutor',
    role: 'Part-time',
    period: 'Ongoing',
    location: 'Lahore, PK',
    detail: 'Tutoring',
    bullets: ['Explain computer science basics to secondary-level students.'],
    tags: ['Teaching', 'Fundamentals', 'Communication'],
  },
]

export type Project = {
  index: string
  title: string
  category: string
  subtitle: string
  blurb: string
  bullets: string[]
  tech: string[]
  repo: string
}

export const projects: Project[] = [
  {
    index: '01',
    title: 'Taskly',
    category: 'CLI · Go',
    subtitle: 'A terminal task manager that keeps the list honest.',
    blurb:
      'A command-line task manager built in Go, with priorities, due dates, overdue flags, completion stats, and CSV file storage so the list survives between sessions.',
    bullets: [
      'Organised into separate domain, application, storage, and UI packages.',
      'Includes unit tests and a README documenting the commands and structure.',
    ],
    tech: ['Go', 'CLI', 'CSV', 'Unit tests'],
    repo: 'https://github.com/Not-Secret-Dev/taskly',
  },
  {
    index: '02',
    title: 'Custom Memory Allocator',
    category: 'Systems · C',
    subtitle: 'A heap allocator written from first principles.',
    blurb:
      'A learning project that recreates malloc, free, and realloc behaviour using heap blocks with metadata, without leaning on the standard library allocator.',
    bullets: [
      'Explores how memory is split and merged (coalescing) to reuse freed space.',
      'An exercise in pointer arithmetic, alignment, and block headers.',
    ],
    tech: ['C', 'Memory', 'Pointers'],
    repo: 'https://github.com/Not-Secret-Dev/Custom-Memory-Allocator',
  },
  {
    index: '03',
    title: 'Personal Portfolio Website',
    category: 'Web · React',
    subtitle: 'The site you are reading right now.',
    blurb:
      'A personal website showcasing projects and contact details, built with React and deployed online with Netlify.',
    bullets: [
      'Project gallery, downloadable CV, and contact details in one place.',
      'Deployed and served through Netlify.',
    ],
    tech: ['React', 'JavaScript', 'Netlify'],
    repo: 'https://github.com/Not-Secret-Dev/Portfolio',
  },
]

export type SkillGroup = {
  label: string
  index: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    index: '01',
    label: 'Working Knowledge',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub', 'Linux'],
  },
  {
    index: '02',
    label: 'Familiar With',
    items: ['C', 'Go', 'Python'],
  },
  {
    index: '03',
    label: 'Currently Practising',
    items: ['Web pages', 'Components', 'JavaScript fundamentals'],
  },
]

export const education = [
  {
    credential: 'DAE — Computer Information Technology (CIT)',
    institution: 'Government College of Technology, Lahore',
    period: '2023 — September 2026',
    location: 'Lahore, PK',
  },
] as const

export const languages = [
  { name: 'Urdu', level: 'Native', meter: 100 },
  { name: 'English', level: 'B2 · Upper Intermediate', meter: 70 },
  { name: 'German', level: 'A1 · Beginner', meter: 25 },
] as const
