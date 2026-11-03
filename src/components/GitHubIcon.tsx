type GitHubIconProps = {
  className?: string
}

/** lucide dropped brand marks in v1, so the official GitHub glyph lives here. */
export function GitHubIcon({ className }: GitHubIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.85 3.14 8.97 7.5 10.43.55.1.75-.24.75-.53v-1.86c-3.05.66-3.69-1.47-3.69-1.47-.5-1.27-1.22-1.61-1.22-1.61-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.19 3.2.91.1-.71.38-1.19.7-1.47-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.29 3.02 1.13a10.5 10.5 0 0 1 5.5 0c2.1-1.42 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.22-2.57 5.15-5.02 5.42.39.34.74 1.01.74 2.04v3.03c0 .29.2.64.76.53a11.02 11.02 0 0 0 7.49-10.43C23.01 5.24 18.27.5 12 .5Z" />
    </svg>
  )
}
