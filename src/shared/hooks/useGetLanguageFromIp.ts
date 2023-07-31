import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { getCookie, setCookie } from 'cookies-next'
import dayjs from 'dayjs'
import { useDebugValue, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAppLocale } from '../stores/appSlice'
import { APP_SAVE_KEY } from '../utils/constants'

export default function useGetLanguageFromIp() {
    const [locale, setLocale] = useState(getCookie(APP_SAVE_KEY.LOCALE))
    const dispatch = useDispatch();
    useQuery(['getAppLocale'], {
        queryFn: () => axios.get(`https://api.ipdata.co?api-key=${process.env.NEXT_PUBLIC_IPDATA_KEY}`),
        onSuccess(data) {
            setLocale(data.data)
            setCookie(APP_SAVE_KEY.LOCALE, JSON.stringify(data), { expires: dayjs().add(1, 'D').toDate() })
            dispatch(setAppLocale(data.data))
        },
        enabled: !locale
    })

    useDebugValue(locale)
    

}