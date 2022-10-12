
  import { createI18n } from 'vue-i18n'
  import ur from '../locales/ur.json'
  import en from '../locales/en.json'
  import ar from '../locales/ar.json'


  const i18n = createI18n({
    legacy: false,
    locale: import.meta.env.VITE_I18N_LOCALE || 'en',
    fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'ur',
    messages: {
      en,
      ur,
      ar
    }
  })

  export default i18n