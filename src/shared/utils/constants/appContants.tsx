export const MAX_EXPORT_SIZE = 100_000
export const MAX_RETRY_REQUEST = 2
export const TIMEOUT_REQUEST = 20_000
export const TIME_FORMAT = 'DD/MM/YYYY HH:mm'
export const SCREENTYPE = {
    MOBILE: 'mobile',
    IPAD: 'ipad',
    TABLET: 'tablet',
    DESKTOP: 'desktop',
    MONITOR: 'monitor'
}
export const APP_SAVE_KEY = {
    TOKEN_KEY: process.env.NEXT_PUBLIC_APP_NAME + '::token_key',
    REFRESH_TOKEN_KEY: process.env.NEXT_PUBLIC_APP_NAME + '::refresh_token_key',
    LOGIN_STATUS: process.env.NEXT_PUBLIC_APP_NAME + '::login_status',
    USER_DATA: process.env.NEXT_PUBLIC_APP_NAME + ':user_data',
    USER_PERMISSION: process.env.NEXT_PUBLIC_APP_NAME + ':user_permission',
    CURRENTPATH_NAME: process.env.NEXT_PUBLIC_APP_NAME + '::pathname',
    LAST_NOTALLOW_ACCESS_PATH: process.env.NEXT_PUBLIC_APP_NAME + '::last_not_allow_access'
}
export const APP_REGEX = {
    VNPhoneRegex: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
    EnglishRegex: /^[A-Za-z]+$/g,
    VietnameseRegex: /^[a-zA-ZÀ-ỹ\s]+$/g,
    WebsiteRegex: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/,
    FaxRegex: /^\+?[0-9\s-]+$/i,
    TaxRegex: /^\d{10,}$/g
}
