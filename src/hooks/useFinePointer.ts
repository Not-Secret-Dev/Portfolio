import { useEffect, useState } from 'react'

/** Tracks whether the primary pointer is precise (mouse/trackpad). */
export function useFinePointer() {
  const [fine, setFine] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia('(pointer: fine)').matches,
  )

  useEffect(() => {
    const query = window.matchMedia('(pointer: fine)')
    const onChange = () => setFine(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return fine
}
