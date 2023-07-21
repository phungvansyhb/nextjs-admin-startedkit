// import { useQuery } from '@tanstack/react-query';
// import { TablePaginationConfig } from 'antd';
// import { useRouter } from 'next/router';
// import { useDebugValue, useEffect } from 'react';
// import { IBaseRequest } from '../schema/typedef/IBaseRequest';
// import { useDispatch } from 'react-redux';
// import { updateTagPath } from '../stores/tagViewSlice';
// import { Filter, ISearchParams, Sort } from '../schema/typedef/ISearchParams';



// type Props<T> = {
//     apiFn: (params?: ISearchParams) => Promise<T>
//     defaultParams?: Partial<ISearchParams>
//     queryKey?: any
// }


// const pageKey = 'page'
// const sizeKey = 'size'

// function parseURLSearch(querySearch: string) {
//     if (!querySearch) return []
//     try {
//         return querySearch.split('&').map(str => JSON.parse(decodeURIComponent(str)));
//     } catch (e) {
//         return []
//     }
// }
// function stringifyArrayObj(param: object[]) {
//     return param.map(obj => encodeURIComponent(JSON.stringify(obj))).join('&')
// }

// export default function usePagination<T>({ queryKey, apiFn, defaultParams }: Props<T>) {
//     const router = useRouter()
//     const pageIndex = parseInt(router.query[pageKey] as string) || defaultParams?.page || 0
//     const pageSize = parseInt(router.query[sizeKey] as string) || defaultParams?.size || 10
//     const sorts: ISearchParams['sorts'] = defaultParams?.sorts || []
//     const filters: ISearchParams['filters'] = parseURLSearch(router.query.search as string)



//     function getFieldValueOnSearchParam(key: string) {
//         let oldFilterArr = []
//         try { oldFilterArr = parseURLSearch(router.query.search as string) }
//         catch (e) {
//             console.log(e)
//         }
//         return oldFilterArr.find(item => item.field === key) ? [oldFilterArr.find(item => item.field === key).value] : null
//     }
//     function onChangeParams(param: any & 'page' | 'size', value: any) {
//         const oldQuery = router.query
//         if (value === undefined) {
//             delete oldQuery[param]
//         }
//         else {
//             oldQuery[param] = value
//         }
//         router.push({
//             pathname: router.pathname,
//             query: oldQuery
//         })
//     }
//     /* for query="" */
//     function onChangeSearchParams(value: Filter) {
//         const oldQuery = router.query
//         const oldFilterArr = parseURLSearch(oldQuery.search as string)
//         let newFilterArr = []
//         if (oldFilterArr.length > 0) {
//             const alreadyFilter = oldFilterArr.find(item => item.field === value.field)
//             if (alreadyFilter) {
//                 newFilterArr = oldFilterArr.map(item => (item.field === value.field) ? ({ ...item, value: value.value }) : item)
//             } else {
//                 newFilterArr = [...oldFilterArr, value]
//             }
//         } else {
//             newFilterArr = [value]
//         }
//         const newFilterArrJson = stringifyArrayObj(newFilterArr.filter(item => item.value !== undefined))
//         const newQuery = { ...oldQuery, page: 0, search: newFilterArrJson }
//         router.push({
//             pathname: router.pathname,
//             query: newQuery
//         })
//     }

//     const finalFilter = defaultParams?.filters ? [...filters, ...defaultParams.filters] : filters
//     const { data, isLoading, refetch } = useQuery({
//         queryKey: [...queryKey, router],
//         queryFn: () => apiFn({ page: pageIndex, size: pageSize, filters: finalFilter, sorts: sorts }),
//         enabled: router.isReady
//     })

//     const tablePaginationConfig: TablePaginationConfig = {
//         // @ts-ignore
//         total: data?.data?.totalElements || 0,
//         pageSize,
//         current: pageIndex + 1,
//         showSizeChanger: true,
//         onChange(page) {
//             console.log('function change run', pageIndex)
//             onChangeParams(pageKey, page - 1)
//         },
//         onShowSizeChange(_current, size) {
//             onChangeParams(sizeKey, size)
//         },
//     }

//     useDebugValue(filters)
//     // useDebugValue(tablePaginationConfig)

//     return {
//         data, isLoading, refetch,
//         pageIndex, pageSize, filters,
//         params: router.query, onChangeParams, tablePaginationConfig, onChangeSearchParams, getFieldValueOnSearchParam
//     }
// }
