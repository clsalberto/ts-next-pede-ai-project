'use client'

import { i18n } from '~/lib/i18n'
import { ThemeProvider } from './theme-provider'
import { TranslationProvider } from './translation-provider'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <TranslationProvider i18n={i18n}>{children}</TranslationProvider>
    </ThemeProvider>
  )
}
