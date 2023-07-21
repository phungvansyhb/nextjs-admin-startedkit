import React from "react";
import { IBaseModel } from "../typedef/IBaseModel";
import usePagination from "@/shared/hooks/usePagination";
import { UseQueryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useTrans from "@/shared/hooks/useTrans";
import { notification } from 'antd'
import { axiosInstanceDev } from "../typedef/Axios";
import { IBaseResponse, IBaseResponseWithCount } from "../typedef/IBaseResponse";
import { MAX_EXPORT_SIZE } from "@/shared/utils/constants/appContants";
import exportExcel from "@/shared/utils/functions/exportExel";

const QUERY_KEY = 'getListAgent'
export interface IAgent extends IBaseModel {
    id: number;
    agentId?: string;
    agentParentName?: string
    agentName: string;
    isSubAgent: boolean,
    parentId?: string,
    phoneCode: number;
    phoneNumber: string;
    email: string;
    level: number;
    taxCode: string;
    iataCode: string;
    businessCode: string,
    country: string;
    zipCode: number;
    address: string;
    district: { districtId: number, districtName: string },
    province: { provinceId: number, provinceName: string },
    ward: { wardId: number, wardName: string };
    legalRepresentation: string;
    position: string;
    website: string;
    language: string;
    bankName: string;
    bankAccount: string;
    accountHolder: string;
    registrationCountry: string;
    registrationArea: string;
    timeZone: string;
    revenueInternational: number;
    domestic: number;
    minimumLimit: number;
    maximumLimit: number;
    active: boolean;

}

interface AreaOption {
    id: number;
    name: string;
}


export const useGetBasicActiveListAgent = () => {
    return useQuery({
        queryKey: [QUERY_KEY, "basic-active"],
        queryFn: () => axiosInstanceDev.get<IBaseResponse<IAgent[]>>('/agents/get-all-active'),
    })
}

export const useGetListAgent = () => {
    return usePagination<IBaseResponse<IBaseResponseWithCount<IAgent[]>>>({
        queryKey: [QUERY_KEY],
        apiFn: (params) => axiosInstanceDev.post<IBaseResponse<IBaseResponseWithCount<IAgent[]>>>('/agents/search', { ...params }),
        defaultParams: {
            page: 0,
            size: 10,
            sorts: [{ field: 'updatedDate', direction: 'DESC' }]
        },

    })
}

export const useGetListSubAgent = () => {
    return usePagination<IBaseResponse<IBaseResponseWithCount<IAgent[]>>>({
        queryKey: [QUERY_KEY, 'sub-agent'],
        apiFn: (params) => axiosInstanceDev.post<IBaseResponse<IBaseResponseWithCount<IAgent[]>>>('/agents/search-sub-agent', { ...params }),
        defaultParams: {
            page: 0,
            size: 10,
            sorts: [{ field: 'updatedDate', direction: 'DESC' }],
        },
    })
}
export const useDeleteSubAgent = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: ({ listIds }: { listIds: React.Key[] }) => axiosInstanceDev.put('/agents/delete-sub-agent', { listIds }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            notification.success({ message: trans.common.notify.deleteSuccess(trans.page.agent._) })
            if (onSuccessHandle) onSuccessHandle()
        },
        onError: (err) => {
            console.log(err)
            notification.error({ message: "Delete Sub Agents fail" })
        }
    })
}
export const useGetDetailAgent = ({ id, options }: { id: React.Key, options?: Partial<UseQueryOptions> }) => {
    return useQuery({
        queryKey: [QUERY_KEY, 'get-detail'],
        queryFn: () => axiosInstanceDev.get<IBaseResponse<IAgent>>('/agents/get-by-id/' + id),
        select(data) {
            return data.data
        },
    })
}

export const useExportDataMutation = () => {
    return useMutation({
        mutationFn: (type: 'all' | 'current') => axiosInstanceDev.post<IBaseResponse<IBaseResponseWithCount<IAgent[]>>>('/agents/search', {
            page: 0,
            size: type === 'all' ? MAX_EXPORT_SIZE : 10,
            sorts: [{ field: 'updatedDate', direction: 'DESC' }]
        }),
        onSuccess: (data) => {
            exportExcel({ data: data.data.content, fileName: 'Dữ liệu Agent' })
        }
    })
}

export const useExportDataSubAgentMutation = () => {
    return useMutation({
        mutationFn: (type: 'all' | 'current') => axiosInstanceDev.post<IBaseResponse<IBaseResponseWithCount<IAgent[]>>>('/agents/search', {
            page: 0,
            size: type === 'all' ? MAX_EXPORT_SIZE : 10,
            sorts: [{ field: 'updatedDate', direction: 'DESC' }],
            filters: [{ field: "isSubAgent", op: 'EQUAL', fieldType: 'BOOLEAN', value: true }]
        }),
        onSuccess: (data) => {
            exportExcel({ data: data.data.content, fileName: 'Dữ liệu SubAgent' })
        }
    })
}


export const useDeleteAgent = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: ({ listIds }: { listIds: React.Key[] }) => axiosInstanceDev.put('/agents/delete', { listIds }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            notification.success({ message: trans.common.notify.deleteSuccess(trans.page.agent._) })
            if (onSuccessHandle) onSuccessHandle()
        },
        onError: (err) => {
            console.log(err)
            notification.error({ message: "Delete Agents fail" })
        }
    })
}

export const useCreateAgent = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: (Agent: IAgent) => axiosInstanceDev.post('/agents/create', Agent),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            notification.success({ message: trans.common.notify.createSuccess(trans.page.agent._) })
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}

export const useUpdateAgent = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: ({ Agent, id }: { Agent: IAgent, id: React.Key }) => axiosInstanceDev.put(`/agents/update/${id}`, Agent),
        onSuccess: () => {
            notification.success({ message: trans.common.notify.editSuccess(trans.page.agent._) })
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}

export const useChangeStatusAgent = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: (id: React.Key) => axiosInstanceDev.put(`/agents/change-status/${id}`,),
        onSuccess: () => {
            notification.success({ message: trans.common.notify.editSuccess(trans.page.agent._) })
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}