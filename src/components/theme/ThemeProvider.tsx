import { useEffect, useState } from 'react'

import { type Theme, ThemeProviderContext } from './useTheme'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const systemTheme = mq.matches ? 'dark' : 'light'
      root.classList.add(systemTheme)

      const handler = (e: MediaQueryListEvent) => {
        if (theme === 'system') {
          root.classList.remove('light', 'dark')
          if (e.matches) {
            root.classList.add('dark')
          }
          else {
            root.classList.add('light')
          }
        }
      }

      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
