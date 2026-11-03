import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../theme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} theme`}
      aria-pressed={theme === 'dark'}
      title={`Switch to ${next} theme`}
      className="grid size-10 place-items-center border border-line-soft transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
    >
      {theme === 'dark' ? (
        <Sun className="size-4" aria-hidden="true" />
      ) : (
        <Moon className="size-4" aria-hidden="true" />
      )}
    </button>
  )
}
