import { createI18n } from 'vue-i18n'
import en from './i18n/en.json'
import ja from './i18n/ja.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ja,
  },
})

export default i18n
