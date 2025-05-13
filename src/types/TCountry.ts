interface Country {
    id: number
    name: string
    iso3: string
    iso2: string
    numeric_code: string
    phonecode: string
    capital: string
    currency: string
    currency_name: string
    currency_symbol: string
    tld: string
    native: string
    region: string
    region_id: number
    subregion: string
    subregion_id: number
    nationality: string
    timezones: Timezone[]
    translations: Translations
    latitude: string
    longitude: string
    emoji: string
    emojiU: string
}

interface Timezone {
    zoneName: string
    gmtOffset: number
    gmtOffsetName: string
    abbreviation: string
    tzName: string
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

export type { Country, Timezone, Translations }