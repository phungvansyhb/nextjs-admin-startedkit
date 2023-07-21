// import { toast } from 'react-toastify';
import React from "react";
import { IBaseModel } from "../typedef/IBaseModel";
import usePagination from "@/shared/hooks/usePagination";
import { UseQueryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useTrans from "@/shared/hooks/useTrans";
import { notification } from "antd";
import { axiosInstanceNews } from "../typedef/Axios";
import { IBaseResponse, IBaseResponseWithCount } from "../typedef/IBaseResponse";
import { ICategory } from "./ICategory.mock";
import { Filter } from "../typedef/ISearchParams";

const QUERY_KEY = 'getListArticle'

export interface IArticle {
    category: ICategory,
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
        apiFn: (params) => axiosInstanceNews.post<IBaseResponse<IBaseResponseWithCount<IArticle[]>>>('/articles/search', { ...params }),
        defaultParams: {
            page: 0,
            size: 10,
            filters: defaultFilter,
            sorts: [{ field: 'updatedDate', direction: 'DESC' }]
        }
    })
}
export const useGetListLatestArticle = ({ search }: { search: string }) => {
    return usePagination<IBaseResponse<IBaseResponseWithCount<IArticle[]>>>({
        queryKey: [QUERY_KEY],
        apiFn: (params) => axiosInstanceNews.post<IBaseResponse<IBaseResponseWithCount<IArticle[]>>>(`/articles/search?categoryName=${search}`, { ...params }),
        defaultParams: {
            page: 0,
            size: 13,
            sorts: [
                {
                    field: "updatedDate",
                    direction: "DESC"
                }
            ]
        }
    })
}
export const useGetDetailArticle = ({ id, options }: { id: React.Key, options: Partial<UseQueryOptions> }) => {
    return useQuery({
        queryKey: [QUERY_KEY],
        queryFn: () => axiosInstanceNews.get<IBaseResponse<IArticle>>('/articles/get-by-id/' + id),
        select(data) {
            return data.data
        },
        enabled: options.enabled
    })
}
export const useDeleteArticle = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: ({ listIds }: { listIds: React.Key[] }) => axiosInstanceNews.put('/articles/delete', { listIds }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            notification.success({ message: trans.common.notify.deleteSuccess(trans.page.article._) })
            if (onSuccessHandle) onSuccessHandle()
        },


    })
}
export const useCreateArticle = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: (Article: IArticle) => axiosInstanceNews.post('/articles/create', Article),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            notification.success({ message: trans.common.notify.createSuccess(trans.page.article._) })
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}
export const useUpdateArticle = (onSuccessHandle: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: ({ id, article }: { id: React.Key, article: IArticle }) => axiosInstanceNews.put(`/articles/update/${id}`, article),
        onSuccess: () => {
            notification.success({ message: trans.common.notify.createSuccess(trans.page.article._) })
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}
export const useChangeStatusArticle = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: ({ id }: { id: React.Key }) => axiosInstanceNews.put(`/articles/change-status/${id}`),
        onSuccess: () => {
            notification.success({ message: trans.common.notify.editSuccess(trans.page.article._) })
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}