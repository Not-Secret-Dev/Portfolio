export const profile = {
  name: 'Aayan Mumtaz',
  firstName: 'AAYAN',
  lastName: 'MUMTAZ',
  role: 'Junior Software Engineer',
  discipline: 'Full-Stack & Systems',
  location: 'Lahore, Pakistan',
  email: 'ayaanmumtaz8@gmail.com',
  phone: '+92 329 7528954',
  phoneHref: '+923297528954',
  github: 'https://github.com/Not-Secret-Dev',
  githubHandle: 'Not-Secret-Dev',
  site: 'https://ayaan-dev-portfolio.netlify.app',
  siteLabel: 'ayaan-dev-portfolio.netlify.app',
  cv: '/Aayan_Mumtaz_CV.pdf',
  availability: 'Open to junior roles & internships',
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
  'REACT',
  'TYPESCRIPT',
  'NODE.JS',
  'POSTGRESQL',
  'C',
  'GO',
  'C++',
  'LINUX',
  'REACT NATIVE',
  'DOCKER',
  'EXPO',
  'TAILWIND',
  'MONGODB',
  'GIT',
] as const

export const stats = [
  { value: '04', label: 'Projects shipped' },
  { value: '02', label: 'Professional roles' },
  { value: '21', label: 'Tools in rotation' },
  { value: '03', label: 'Languages spoken' },
] as const

export const about = {
  intro:
    "I'm Aayan — a junior engineer from Lahore who likes software that still behaves when the network drops, the memory runs out, or the diagram gets complicated.",
  body: [
    'On the product side I work in React and React Native: component systems, REST integrations, and interfaces that stay usable offline. Underneath that I write C — allocators, epoll servers, small Unix utilities — because building the primitives is the fastest way to understand why the higher layers behave the way they do.',
    "My path ran through a full-stack internship at Developer'sHub and a year of IT support at Lahori Qulfa, where the problems were hardware, accounts, and networks rather than pull requests. Both taught the same lesson: a system is only as good as its weakest handoff.",
  ],
} as const

export const principles = [
  {
    title: 'Ship the whole path',
    body: 'Schema, service, and pixel belong to the same feature — none of them are someone else’s problem.',
  },
  {
    title: 'Understand the floor',
    body: 'Allocators, sockets, and file descriptors explain most of the bugs that look mysterious upstairs.',
  },
  {
    title: 'Leave it legible',
    body: 'Clear names and small surfaces beat clever shortcuts six months later.',
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
      'Built responsive React interfaces and wired them to REST endpoints across the product.',
      'Tracked down bugs across client and server code inside a Git-based review workflow.',
    ],
    tags: ['React', 'REST APIs', 'Git', 'Debugging'],
  },
  {
    company: 'Lahori Qulfa',
    role: 'IT Support',
    period: '~1 year',
    location: 'Lahore, PK',
    detail: 'Support',
    bullets: [
      'Kept hardware, software, and local-network issues from turning into staff downtime.',
      'Handled system setup, user accounts, and day-to-day technical requests.',
    ],
    tags: ['Hardware', 'Networking', 'Windows', 'Troubleshooting'],
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
}

export const projects: Project[] = [
  {
    index: '01',
    title: 'ShelfSync',
    category: 'Mobile · Offline-first',
    subtitle: 'Inventory that works in a dead zone.',
    blurb:
      'A React Native inventory app for shop floors and stockrooms. Stock lives in SQLite first, barcodes scan on-device, and edits reconcile with a PostgreSQL backend once a connection returns.',
    bullets: [
      'Conflict-resolution sync merges local and remote edits instead of last-write-wins.',
      'Expo + TypeScript app backed by a Node/PostgreSQL API.',
    ],
    tech: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Node.js', 'PostgreSQL'],
  },
  {
    index: '02',
    title: 'Custom Memory Allocator',
    category: 'Systems · C',
    subtitle: 'A heap allocator written from first principles.',
    blurb:
      'my_malloc, my_free, and realloc implemented without leaning on the standard library allocator. Block headers track size and state so freed memory can be split and merged back into usable chunks.',
    bullets: [
      'Splitting and coalescing keep fragmentation in check across a long-running workload.',
      'An exercise in pointer arithmetic, alignment, and packing metadata into the heap itself.',
    ],
    tech: ['C', 'Memory', 'Pointers'],
  },
  {
    index: '03',
    title: 'MiniKV',
    category: 'Networking · Linux',
    subtitle: 'A TCP key–value store that keeps many clients talking.',
    blurb:
      'A single-process server built on non-blocking sockets and epoll — no thread per connection. Keys expire on a TTL, and state survives restarts through an append-only log.',
    bullets: [
      'Event-loop architecture handles concurrent clients without blocking the accept path.',
      'In-memory hash table with expiry and crash-recoverable persistence.',
    ],
    tech: ['C', 'Linux', 'Sockets', 'epoll'],
  },
  {
    index: '04',
    title: 'Flowboard',
    category: 'Interface · Web',
    subtitle: 'A diagram editor you can actually drag.',
    blurb:
      'A node-based editor drawn in SVG: pan, zoom, drag nodes, and run undo/redo without losing your place. The interaction model stays precise at any scale.',
    bullets: [
      'Custom pointer math for panning, zooming, and snapping nodes.',
      'Undo/redo built on an immutable history stack.',
    ],
    tech: ['React', 'TypeScript', 'SVG', 'State'],
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
    label: 'Languages',
    items: ['C', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    index: '02',
    label: 'Frontend & Mobile',
    items: ['React', 'React Native', 'Expo', 'Vite', 'Tailwind CSS'],
  },
  {
    index: '03',
    label: 'Backend & Systems',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Linux', 'Golang', 'C/C++'],
  },
  {
    index: '04',
    label: 'Tools',
    items: ['Git', 'Docker', 'Postman'],
  },
]

export const education = [
  {
    credential: 'DAE — Computer Information Technology (CIT)',
    institution: 'Government College of Technology, Lahore',
    period: '2023 — 2026',
    location: 'Lahore, PK',
  },
  {
    credential: 'Matriculation — Computer Science',
    institution: 'Government Boys High School, Baghbanpura',
    period: '2021 — 2023',
    location: 'Lahore, PK',
  },
] as const

export const languages = [
  { name: 'Urdu', level: 'Native', meter: 100 },
  { name: 'English', level: 'B2 · Conversational', meter: 65 },
  { name: 'German', level: 'A2 · Elementary', meter: 35 },
] as const
