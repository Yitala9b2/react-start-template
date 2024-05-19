import { I18nContextType } from "./localTypes"

export const resource: I18nContextType['i18n'] = {
    en: {
        components: {
            header: {
                theme: 'change theme',
                head: 'head',
                language: 'change language',

            },
            testLanguage: {
                text: 'change language',
            }
        }
    },
    ru: {
        components: {
            header: {
                theme: 'сменить тему',
                head: 'шапка',
                language: 'сменить язык',
                text: 'сменить язык',
            },
            testLanguage: {
                text: 'сменить язык',
            }
        }
    }
}