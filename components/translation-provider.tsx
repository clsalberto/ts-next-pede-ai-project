'use client'

import { I18nextProvider, I18nextProviderProps } from 'react-i18next'

export function TranslationProvider({
  children,
  ...props
}: I18nextProviderProps) {
  return <I18nextProvider {...props}>{children}</I18nextProvider>
}
