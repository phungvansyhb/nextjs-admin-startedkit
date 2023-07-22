// import { toast } from 'react-toastify';
import usePagination from "@/shared/hooks/usePagination";
import { axiosInstanceNoAuth } from "../typedef/Axios";
import { IBaseResponse, IBaseResponseWithCount } from "../typedef/IBaseResponse";
import { Filter } from "../typedef/ISearchParams";

const QUERY_KEY = 'getListArticle'

export interface IArticle {
    isActive: boolean;
    isDelete: boolean;
    createdDate: string;
    updatedDate: string;
    id: string;
    title: string;
    description: string;
    content: string;
    image: string;
    preview: string;
    author: string;
}

export const useGetListArticle = (defaultFilter?: Filter[]) => {
    return usePagination<IBaseResponse<IBaseResponseWithCount<IArticle[]>>>({
        queryKey: [QUERY_KEY],
        apiFn: (params) => axiosInstanceNoAuth.post<IBaseResponse<IBaseResponseWithCount<IArticle[]>>>('/articles/search', { ...params }),
        defaultParams: {
            page: 0,
            size: 2,
            filters: defaultFilter,
            sorts: [{ field: 'updatedDate', direction: 'DESC' }]
        }
    })
}
