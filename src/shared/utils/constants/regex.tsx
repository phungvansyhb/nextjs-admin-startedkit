export const APP_REGEX = {
    VNPhoneRegex: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
    EnglishRegex: /^[A-Za-z]+$/g,
    VietnameseRegex: /^[a-zA-ZÀ-ỹ\s]+$/g,
    WebsiteRegex: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/,
    FaxRegex: /^\+?[0-9\s-]+$/i,
    TaxRegex: /^\d{10,}$/g
}