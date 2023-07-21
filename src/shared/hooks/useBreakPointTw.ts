// import { useMemo } from 'react'
// import { useWindowSize } from 'react-use'
// import tailwindConfig from '../../tailwind.config'

// export default function useBreakPointTw() {
//     const { width, height } = useWindowSize()
//     const breakpoint = tailwindConfig.theme?.extend?.screens
//     const screen = useMemo(() => {
//         if (breakpoint) {
//             let result = 'desktop';
//             Object.keys(breakpoint).forEach((item) => {
//                 //@ts-ignore
//                 const screenSize = breakpoint[item] as { max?: string, min: string }
//                 const minSize = parseInt(screenSize.min.replace('px', ''))
//                 const maxSize = screenSize.max ? parseInt(screenSize.max.replace('px', '')) : Number.MAX_SAFE_INTEGER

//                 if (minSize <= width && width <= maxSize) {
//                     result = item
//                 }
//             })

//             return result
//         }

//         throw Error('no screen available')

//     }, [width])

//     return { width, height, screen }
// }