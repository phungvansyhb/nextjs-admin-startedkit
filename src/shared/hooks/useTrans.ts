import EnglishScript from 'public/locales/en';
import VnScript from 'public/locales/vi';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';


function getTrans(locale: string | undefined) {
    switch (locale) {
        case 'vi': return VnScript
        case 'en': return EnglishScript
        default: return VnScript
    }
}
function getCurrentcy(locale: string | undefined) {
    switch (locale) {
        case 'vi': return 'VND'
        case 'en': return 'USD'
        default: return 'VND'
    }
}

const useTrans = () => {
    const router = useRouter();
    const { locale, pathname, query, asPath } = router;
    const [lang, setLang] = useState(locale);
    const [currentcy, setCurrentcy] = useState('VND')


    const trans = getTrans(locale);

    const changeLanguage = useCallback((lang: 'vi' | 'en') => {
        router.push({ pathname, query }, asPath, { locale: lang });
        setLang(lang);
        setCurrentcy(getCurrentcy(locale))
    }, [router, pathname, query, asPath, locale])

    useEffect(() => {
        setLang(locale || 'vi');
        setCurrentcy(getCurrentcy(locale))
    }, [router, locale]);

    return { trans, lang, changeLanguage, currentcy };
};

export default useTrans;
