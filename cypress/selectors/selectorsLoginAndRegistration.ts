export const SELECTORS = {
    LOGIN_BUTTON: ".auth-bar__item--text",
    ENTER_BUTTON: ".auth-form__button_width_full",
    FIELDS_WITH_ERROR: ".auth-form__description_error",
    REGISTRATION_BUTTON: "a[href$='registration']",
    LOGIN: {
        EMAIL: "[placeholder='Ник или e-mail']",
        PASSWORD: "[placeholder='Пароль']",
    },
    REGISTRATION: {
        APPROVE_PRIVACY_POLICY: "input.i-checkbox__real",
        EMAIL: "[placeholder='Ваш e-mail']",
        PASSWORD: "[placeholder='Придумайте пароль']",
        REPEAT_PASSWORD: "[placeholder='Повторите пароль']",
        ERROR_PRIVACY_POLICY: ".growl-content",
    },
};