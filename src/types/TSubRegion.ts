interface SubRegion {
    id: number
    name: string
    region_id: number
    translations: Translations
    wikiDataId: string
}

interface Translations {
    ko: string
    pt: string
    nl: string
    hr?: string
    fa: string
    de: string
    es: string
    fr: string
    ja: string
    it: string
    "zh-CN": string
    ru: string
    uk: string
    pl: string
}

export type { SubRegion, Translations }