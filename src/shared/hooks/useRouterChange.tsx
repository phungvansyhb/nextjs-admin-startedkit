import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setLoading } from '../stores/appSlice';


export default function useNprogress() {
    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(() => {
        const handleRouteStart = () => {
            window.scrollTo({top : 0 , behavior : 'smooth'})
            dispatch(setLoading(true))
        };
        const handleRouteDone = () => dispatch(setLoading(false));
        router.events.on("routeChangeStart", handleRouteStart);
        router.events.on("routeChangeComplete", handleRouteDone);
        router.events.on("routeChangeError", handleRouteDone);

        return () => {
            // Make sure to remove the event handler on unmount!
            router.events.off("routeChangeStart", handleRouteStart);
            router.events.off("routeChangeComplete", handleRouteDone);
            router.events.off("routeChangeError", handleRouteDone);
        };
    }, [router,dispatch]); 
}