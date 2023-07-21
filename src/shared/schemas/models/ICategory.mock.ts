import { IBaseModel } from './../typedef/IBaseModel';
import usePagination from "@/shared/hooks/usePagination"
import { UseMutationOptions, UseQueryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import useTrans from "@/shared/hooks/useTrans";
import { notification } from 'antd'
import { axiosInstanceNews } from '../typedef/Axios';
import { IBaseResponse, IBaseResponseWithCount } from '../typedef/IBaseResponse';
import React from 'react';
const QUERY_KEY = 'getListCategory'
export interface ICategory {
  active: boolean;
  isDelete: boolean;
  createdDate: string;
  updatedDate: string;
  createdBy?: any;
  updatedBy?: any;
  id: string;
  categoryName: string;
  categoryImage?: string;
}

export const useGetAllListCategory = () => {
    return useQuery({
        queryKey: [QUERY_KEY],
        queryFn: () => axiosInstanceNews.get<IBaseResponse<IBaseResponseWithCount<ICategory[]>>>('/categories/get-all?page=0&size=11'),
        select(data) {
            return data.data.content
        },
    })
}
export const useGetListCategory = ({ defaultParams }: { defaultParams?: any }) => {
    return usePagination<ICategory[]>({
        queryKey: [QUERY_KEY],
        apiFn: (params) => axiosInstanceNews.get('/categories', {params}),
        defaultParams: { _start: 0, _limit: 10, ...defaultParams }
    })
}
export const useGetDetailCategory = ({ id, ...rest }: { id: React.Key } & Partial<UseQueryOptions>) => {
    return useQuery({
        queryKey: [rest.queryKey],
        queryFn: () => axiosInstanceNews.get<IBaseResponse<IBaseResponseWithCount<ICategory>>>('/categories/get-by-id/' + id),
        select(data) {
            return data.data
        },
    })
}
export const useDeleteCategory = () => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: ({ listCategoryIds }: { listCategoryIds: React.Key[] }) =>  axiosInstanceNews.put('/categories/delete', { listIds: listCategoryIds }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            notification.success({ message : trans.common.notify.deleteSuccess(trans.page.category._)})
        },
        onError: (err) => {
            console.log(err)
            notification.error({ message: "Delete Category fail" })
        }
    })
}
export const useCreateCategory = (onSuccessHandle: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: (Category: ICategory) => axiosInstanceNews.post('/categories/create', Category),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            notification.success({ message : trans.common.notify.createSuccess(trans.page.category._)})
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}
export const useUpdateCategory = (onSuccessHandle: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: (Category: ICategory) => axiosInstanceNews.put('/categories/', Category),
        onSuccess: () => {
            notification.success({message : trans.common.notify.createSuccess(trans.page.category._)})
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
        },
    })
}
export const useChangeStatus = () => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: (id: React.Key) => axiosInstanceNews.put(`/categories/change-status/${id}`),
        onSuccess: () => {
            notification.success({message : trans.common.notify.editSuccess(trans.page.category._)})
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
        },
    })
}