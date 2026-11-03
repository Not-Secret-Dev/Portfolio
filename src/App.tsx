import { About } from './components/About'
import { Background } from './components/Background'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { ScrollProgress } from './components/ScrollProgress'
import { ScrollRuler } from './components/ScrollRuler'
import { Skills } from './components/Skills'
import { ThemeProvider } from './theme'

function App() {
  return (
    <ThemeProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:bg-ink focus:px-4 focus:py-3 focus:text-[11px] focus:uppercase focus:tracking-[0.18em] focus:text-paper"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <Nav />

      <main id="main" className="xl:pr-16">
        <ScrollRuler />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Background />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  )
}

export default App
