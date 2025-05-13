interface Region {
  id: number
  name: string
  translations: Translations
  wikiDataId: string
}

interface Translations {
  ko: string
  "pt-BR": string
  pt: string
  nl: string
  hr: string
  fa: string
  de: string
  es: string
  fr: string
  ja: string
  it: string
  "zh-CN": string
  tr: string
  ru: string
  uk: string
  pl: string
}

export type {Region, Translations}