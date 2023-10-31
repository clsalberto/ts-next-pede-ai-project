import i18n from 'i18next'

import { initReactI18next } from 'react-i18next'

import enTranslations from './locales/en.json'
import ptTranslations from './locales/pt.json'

export interface Language {
  iso: string
  name: string
}

const languages: Language[] = [
  { iso: 'en', name: 'English' },
  { iso: 'pt', name: 'Português' },
]

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enTranslations },
    pt: { ...ptTranslations },
  },
  lng: 'pt',
})

export { i18n, languages }
