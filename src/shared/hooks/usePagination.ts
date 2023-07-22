import { useQuery, QueryClient, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useDebugValue } from 'react';
import { Filter, ISearchParams } from '../schemas/typedef/ISearchParams';
import { PAGINATION } from '../utils/constants/appContants';

type Props<T> = {
    apiFn: (_params?: ISearchParams) => Promise<T>;
    defaultParams?: Partial<ISearchParams>;
    queryKey?: any;
};

const pageKey = PAGINATION.PAGEKEY;
const sizeKey = PAGINATION.SIZEKEY;

function parseURLSearch(querySearch: string) {
    if (!querySearch) return [];
    try {
        return querySearch.split('&').map(str => JSON.parse(decodeURIComponent(str)));
    } catch (e) {
        return [];
    }
}
function stringifyArrayObj(param: object[]) {
    return param.map(obj => encodeURIComponent(JSON.stringify(obj))).join('&');
}

export default function usePagination<T>({ queryKey, apiFn, defaultParams }: Props<T>) {
    const router = useRouter();
    const pageIndex = parseInt(router.query[pageKey] as string) || defaultParams?.page || 0;
    const pageSize = parseInt(router.query[sizeKey] as string) || defaultParams?.size || PAGINATION.DEFAULT_PAGE_SIZE;
    const sorts: ISearchParams['sorts'] = defaultParams?.sorts || [];
    const filters: ISearchParams['filters'] = parseURLSearch(router.query.search as string);

    /**
     * 
     * @param key : propertyName to search
     * @returns an array | null
     */
    function getFieldValueOnSearchParam(key: string) {
        let oldFilterArr = [];
        try {
            oldFilterArr = parseURLSearch(router.query.search as string);
        } catch (e) {
            console.log(e);
        }
        return oldFilterArr.find(item => item.field === key) ? [oldFilterArr.find(item => item.field === key).value] : null;
    }
    /**
   * 
   * @param key : propertyName to search
   * @returns string| null
   */
    function getFieldValueOnSearchParam2(key: string) {
        let oldFilterArr = [];
        try {
            oldFilterArr = parseURLSearch(router.query.search as string);
        } catch (e) {
            console.log(e);
        }
        return oldFilterArr.find(item => item.field === key) ? oldFilterArr.find(item => item.field === key).value : null;
    }

    function onChangeParams(param: (any & 'page') | 'size', value: any) {
        const oldQuery = router.query;
        if (value === undefined) {
            delete oldQuery[param];
        } else {
            oldQuery[param] = value;
        }
        router.push({
            pathname: router.pathname,
            query: oldQuery,
        });
    }
    /* for query="" */
    function onChangeSearchParams(value: Filter) {
        const oldQuery = router.query;
        const oldFilterArr = parseURLSearch(oldQuery.search as string);
        let newFilterArr = [];
        if (oldFilterArr.length > 0) {
            const alreadyFilter = oldFilterArr.find(item => item.field === value.field);
            if (alreadyFilter) {
                newFilterArr = oldFilterArr.map(item => (item.field === value.field ? { ...item, value: value.value } : item));
            } else {
                newFilterArr = [...oldFilterArr, value];
            }
        } else {
            newFilterArr = [value];
        }
        const newFilterArrJson = stringifyArrayObj(newFilterArr.filter(item => item.value !== undefined));
        const newQuery = { ...oldQuery, page: 0, search: newFilterArrJson };
        router.push({
            pathname: router.pathname,
            query: newQuery,
        });
    }
    const finalFilter = defaultParams?.filters ? [...filters, ...defaultParams.filters] : filters;
    const { data, isFetching, refetch } = useQuery({
        queryKey: [...queryKey, router],
        queryFn: () => apiFn({ page: pageIndex, size: pageSize, filters: finalFilter, sorts: sorts }),

        enabled: router.isReady,

    });

    const tableConfig = {
        pageSize: pageSize,
        pageIndex: pageIndex,
        isLoading: isFetching,
        //@ts-ignore
        pageCount: data?.data?.totalPages,
        handChangePagination: (value: number, type: 'Page_change' | 'Size_change') => {
            if (type === 'Page_change') {
                onChangeParams(PAGINATION.PAGEKEY, value);
            } else {
                onChangeParams(PAGINATION.SIZEKEY, value);
            }
        },
    };
    useDebugValue(filters);
    return {
        data,
        tableConfig,
        isFetching,
        refetch,
        pageIndex,
        pageSize,
        filters,
        sorts,
        params: router.query,
        onChangeParams,
        onChangeSearchParams,
        getFieldValueOnSearchParam,
        getFieldValueOnSearchParam2
    };
}
