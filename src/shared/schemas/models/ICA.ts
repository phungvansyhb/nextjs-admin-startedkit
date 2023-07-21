import React from "react";
import { IBaseModel } from "../typedef/IBaseModel";
import usePagination from "@/shared/hooks/usePagination";
import { UseQueryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useTrans from "@/shared/hooks/useTrans";
import { notification } from 'antd'
import { axiosInstanceDev } from "../typedef/Axios";
import { Filter, ISearchParams, Sort } from "../typedef/ISearchParams";
import { IBaseResponse, IBaseResponseWithCount } from "../typedef/IBaseResponse";
import exportExcel from "@/shared/utils/functions/exportExel";
import { MAX_EXPORT_SIZE } from "@/shared/utils/constants/appContants";
const QUERY_KEY = 'getListCA'


export interface ICA extends IBaseModel {
    //Corporate Information
    id: number;
    vietnameseName: string;
    englishName: string;

    abbreviatedName: string,
    phoneCode: number,
    phoneNumber: number,
    fax: string,
    businessRegistrationNo: number,
    taxCode: string
    country: string,
    city: string,
    district: { districtId: number, districtName: string } ,
    province: { provinceId: number, provinceName: string } ,
    zipCode: number;
    ward: { wardId: number, wardName: string } ;
    address: string;
    email: string,
    website: string,
    issueDate: string,
    issuedBy: string,

    language: string,

    bankName: string;
    bankAccount: string;
    accountHolder: string;
    fullNameLegal: string,
    position: string,
    addressLegal: string,
    typeId: string,
    legalId: string
    issueDateLegal: string,
    issueByLegal: string,
    // register area
    timeZone: string;
    international: number;
    domestic: number;
    // agent 
    agents: [1, 2, 3]
    active: boolean
}



// interface AreaOption {
//     id: number;
//     name: string;
// }

export const useGetBasicActiveListCA = () => {
    return useQuery({
        queryKey: [QUERY_KEY, "basic-active"],
        queryFn: () => axiosInstanceDev.get<IBaseResponse<ICA[]>>('/ca/get-all-active'),
    })
}

export const useGetListCA = () => {
    return usePagination<IBaseResponse<IBaseResponseWithCount<ICA[]>>>({
        queryKey: [QUERY_KEY],
        apiFn: (params?: ISearchParams) => axiosInstanceDev.post('/ca/search', { ...params }),
        defaultParams: {
            page: 0,
            size: 10,
            sorts: [{ field: 'updatedDate', direction: 'DESC' }]
        }
    })
}
export const useGetDetailCA = ({ id, options }: { id: React.Key, options: Partial<UseQueryOptions> }) => {
    return useQuery({
        queryKey: [QUERY_KEY, 'get-detail'],
        queryFn: () => axiosInstanceDev.get<IBaseResponse<ICA>>('/ca/get-by-id/' + id),
        select(data) {
            return data.data
        },
        enabled: options?.enabled
    })
}
export const useExportDataMutation = () => {
    return useMutation({
        mutationFn: (type: 'all' | 'current') => axiosInstanceDev.post<IBaseResponse<IBaseResponseWithCount<ICA[]>>>('/ca/search', {
            page: 0,
            size: type === 'all' ? MAX_EXPORT_SIZE : 10,

            sorts: [{ field: 'updatedDate', direction: 'DESC' }]

        }),
        onSuccess: (data) => {
            exportExcel({ data: data.data.content, fileName: 'Dữ liệu CA' })
        }
    })
}
export const useDeleteCA = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: ({ listCaIds }: { listCaIds: React.Key[] }) => axiosInstanceDev.put('/ca/delete', { listIds: listCaIds }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            notification.success({ message: trans.common.notify.deleteSuccess(trans.page.CA._) })
            if (onSuccessHandle) onSuccessHandle()
        },
        onError: (err) => {
            console.log(err)
            notification.error({ message: "Delete CA fail" })
        }
    })
}
export const useCreateCA = (onSuccessHandle: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: (CA: ICA) => axiosInstanceDev.post('/ca/create', CA),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            notification.success({ message: trans.common.notify.createSuccess(trans.page.CA._) })
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}
export const useUpdateCA = (onSuccessHandle: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: ({ CA, id }: { CA: ICA, id: React.Key }) => axiosInstanceDev.put('/ca/update/' + id, CA),
        onSuccess: () => {
            notification.success({ message: trans.common.notify.editSuccess(trans.page.CA._) })
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}
export const useChangeStatusCA = (onSuccessHandle: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: (id: React.Key) => axiosInstanceDev.put(`/ca/change-status/${id}`,),
        onSuccess: () => {
            notification.success({ message: trans.common.notify.editSuccess(trans.page.CA._) })
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}