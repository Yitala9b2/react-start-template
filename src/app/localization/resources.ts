import { I18nContextType } from "./localTypes"

export const resource: I18nContextType['i18n'] = {
    en: {
        components: {
            header: {
                theme: 'Сhange theme',
                login: 'Login form',
                registration: 'Registration',
                language: 'Сhange language',
                operations: 'Operations',
                profile: 'Profile'
            },
            operation:{
                addOperation: 'Add operation'
            },
            testLanguage: {
                text: 'Сhange language',
            }
        }
    },
    ru: {
        components: {
            header: {
                theme: 'Сменить тему',
                login: 'Форма входа',
                registration: 'Регистрация',
                language: 'Сменить язык',
                operations: 'Операции',
                profile: 'Профиль'
            },
            operation:{
                addOperation: 'Добавить операцию'
            },
            testLanguage: {
                text: 'сменить язык',
            }
        }
    }
}