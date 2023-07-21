
import { IBaseResponse, IBaseResponseWithCount } from './../typedef/IBaseResponse';
import { UseQueryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { axiosInstanceDev } from "../typedef/Axios"
import { IBaseModel } from "../typedef/IBaseModel"
import usePagination from "@/shared/hooks/usePagination"
import useTrans from "@/shared/hooks/useTrans"
import { notification } from "antd"
import { ISearchParams } from '../typedef/ISearchParams';

const QUERY_KEY = 'Role-model'

export type ActionPermission = "view" | "create" | "delete"

export interface PermissionList {
    id: string;
    categoryName: string;
    permissionDtoList: PermissionDto[];
}
export interface PermissionDto {
    id: string;
    permissionName: string;
    description: string;
}
export interface PermissionListDTO {
    id: string;
    key: string;
    categoryName: string;
    permissionName: string;
    children: PermissionDto[],
    permissionDtoList: PermissionDto[];
}

export interface IPermissionAction {
    id: string,
    permissionName: string,
    actionName: string,
    active: boolean
}

export interface IRoleList {
    id: React.Key
    roleName: string,
    description: string,
    updatedDate: string,
    // permissions: PermissionDto[]
}

export interface IRoleDetail extends IBaseModel {
    roleDto: IRoleList,
    permissionActionDtoList: IPermissionAction[]
}

export interface IActionPermissionList {
    id: React.Key,
    categoryName: string,
    actionEditDto: {
        id: string;
        permissionName: string;
        permissionActionDtoList: {
            id: string;
            permissionName: string;
            actionName: ActionPermission;
            active: boolean;
        }[]
    }[];
}

export const useGetBasicActiveListRole = () => {
    return useQuery({
        queryKey: [QUERY_KEY, "basic-active"],
        queryFn: () => axiosInstanceDev.get<IBaseResponse<IRoleList[]>>('/roles/get-all-active'),
    })
}

export const useGetAllPermissions = () => {
    return useQuery({
        queryKey: ['getListPermisison'],
        queryFn: () => axiosInstanceDev.get<IBaseResponse<PermissionListDTO[]>>('/categories/get-all'),
        select(data) {
            return data.data.map(item => ({
                ...item,
                key: item.id,
                permissionName: item.categoryName,
                children: item.permissionDtoList
            }))
        },
    })
}



export const useGetAllActionPermissions = () => {
    return useQuery({
        queryKey: ['getListActionPermisison'],
        queryFn: () => axiosInstanceDev.get<IBaseResponse<IActionPermissionList[]>>('/categories/get-categories'),
        select(data) {
            return data.data
        },

    })
}
export const useGetListRoles = () => {
    return usePagination<IBaseResponse<IBaseResponseWithCount<IRoleList[]>>>({
        queryKey: [QUERY_KEY],
        apiFn: (params) => axiosInstanceDev.post<IBaseResponse<IBaseResponseWithCount<IRoleList[]>>>('/roles/search', { ...params }),
        defaultParams: {
            page: 0,
            size: 10,
            sorts: [{ field: 'updatedDate', direction: 'DESC' }]
        },

    })
}
export const useGetDetailRole = ({ id, options }: { id: React.Key, options: Partial<UseQueryOptions> }) => {
    return useQuery({
        queryKey: [QUERY_KEY, 'detail'],
        queryFn: () => axiosInstanceDev.get<IBaseResponse<IRoleDetail>>('/roles/get-by-id/' + id),
        select(data) {
            return data.data
        },
        enabled: options.enabled
    })
}
export const useDeleteRoles = () => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: (id: React.Key) => axiosInstanceDev.delete('/roles/' + id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            notification.success({ message: trans.common.notify.deleteSuccess(trans.page.role._) })
        },


    })
}

export interface ICreateRole {
    roleDto: {
        id?: React.Key
        roleName: string,
        description: string
    },
    permissionActionDtoList: IPermissionAction[]
}

export const useCreateRole = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: (Role: ICreateRole) => axiosInstanceDev.post('/roles/create', Role),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            notification.success({ message: trans.common.notify.createSuccess(trans.page.role._) })
            if (onSuccessHandle) onSuccessHandle()

        },
    })
}

export const useUpdateRole = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: ({ Role, id }: { Role: ICreateRole, id: React.Key }) => axiosInstanceDev.put(`/roles/update/${id}`, Role),
        onSuccess: () => {
            notification.success({ message: trans.common.notify.editSuccess(trans.page.role._) })
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}

