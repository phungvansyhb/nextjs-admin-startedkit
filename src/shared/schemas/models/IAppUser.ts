import { UseQueryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { APP_ROLE } from "../../utils/constants/appRole";
import { getCookie, setCookie } from 'cookies-next'
import { APP_SAVE_KEY } from "@/shared/utils/constants/appContants";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useRedux";
import { login } from "@/shared/stores/appSlice";
import { useRouter } from "next/router";
import { notification } from 'antd'
import { axiosInstanceDev } from "../typedef/Axios";
import { IAgent } from "./IAgent";
// import { IRole } from "./IRole";
import usePagination from "@/shared/hooks/usePagination";
import useTrans from "@/shared/hooks/useTrans";
import { IBaseModel } from "../typedef/IBaseModel";
import { IBaseResponse, IBaseResponseWithCount } from "../typedef/IBaseResponse";
import { IRoleDetail } from "./IRole";



const QUERY_KEY = 'userModel'

export interface PermissionAction {
    action: string,
    active: boolean,
    rolePermissionActionid: React.Key,
    permissionName: string,
    permissionCode: string
}
export interface IInforUser {
    user: IAppUser,
    agentDto: IAgentUser,
    isAgentAdmin: boolean,
    rolePermissionActionDtos: {
        roleId: React.Key,
        roleName: string,
        description: string,
        rolePermissionAction: PermissionAction[]
    }[]
}

export interface IAppUser extends IBaseModel {
    fullName: string,
    userName: string,
    password: string,
    active: boolean,
    phoneCode: number,
    phoneNumber: string,
    email: string,
    updatedDate: Date,
    organizationDto: OrganizationDto,
    agent: IAgent,
    roles: { roleName: string, id: string }[]
}
export interface ICreateUser {
    fullname: string,
    username: string,
    email: string,
    active: boolean,
    phoneNumber: string,
    organizationId: number,
    agentId: React.Key,
    roleId: React.Key[]
    password: string,
}
interface OrganizationDto {
    organization: Organization;
}

interface Organization {
    id: string;
    name: string;
}


export interface IUser {
    refreshToken: string;
    token: string;
    user: User;
    agentDto?: IAgentUser,
    rolePermissionActionDtos: any
}

interface User {
    active: boolean;
    createdDate?: any;
    updatedDate?: any;
    id: string;
    userName: string;
    fullName: string;
    rawPassword?: any;
    phoneCode?: any;
    phoneNumber: string;
    email: string;
    organizationId: string;
    roles: IRoleDetail[];
}

export interface IAgentUser {
    id: string,
    agentName: string
    timeZone: string
}

export const useGetListUser = () => {
    return usePagination<IBaseResponse<IBaseResponseWithCount<IAppUser[]>>>({
        queryKey: [QUERY_KEY],
        apiFn: (params) => axiosInstanceDev.post<IBaseResponse<IBaseResponseWithCount<IAppUser[]>>>('/users/search', { ...params }),
        defaultParams: {
            page: 0,
            size: 10,
            sorts: [{ field: 'updatedDate', direction: 'DESC' }]
        }
    })
}
export const useGetDetailUser = ({ id, options }: { id: React.Key, options: Partial<UseQueryOptions> } & Partial<UseQueryOptions>) => {
    return useQuery({
        queryKey: [QUERY_KEY, 'detail'],
        queryFn: () => axiosInstanceDev.get<IBaseResponse<IAppUser>>('/users/detail/' + id),
        select(data) {
            return data.data
        },
        enabled: options.enabled
    })
}
export const useDeleteUser = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: ({ listIds }: { listIds: React.Key[] }) => axiosInstanceDev.put('/users/delete', { listIds }),
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
export const useCreateUser = (onSuccessHandle: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: (user: ICreateUser) => axiosInstanceDev.post('/users/create', user),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            notification.success({ message: trans.common.notify.createSuccess(trans.page.users._) })
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}
export const useUpdateUser = (onSuccessHandle: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: ({ user, id }: { user: ICreateUser, id: React.Key }) => axiosInstanceDev.put(`/users/${id}`, user),
        onSuccess: () => {
            notification.success({ message: trans.common.notify.editSuccess(trans.page.users._) })
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}
export const useChangeStatusUser = (onSuccessHandle: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: (id: React.Key) => axiosInstanceDev.put(`/users/change-status/${id}`,),
        onSuccess: () => {
            notification.success({ message: trans.common.notify.editSuccess(trans.page.users._) })
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}



export const useLogin = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    return useMutation({
        mutationFn: ({ username, password }: { username: string, password: string }) => {
            return axiosInstanceDev.post<IBaseResponse<IUser>>("/auth/login", { username, password })
        },
        onSuccess(data) {
            if (!data.data.token) return
            notification.success({ message: 'Login success' })
            setCookie(APP_SAVE_KEY.TOKEN_KEY, data.data.token)
            setCookie(APP_SAVE_KEY.REFRESH_TOKEN_KEY, data.data.refreshToken)
            setCookie(APP_SAVE_KEY.LOGIN_STATUS, 'true')
            dispatch(login(data.data))
            router.push('/')
        },
        onError(error, variables, context) {
            notification.error({ message: 'Login Fail' })
        },
    })
}

export const useGetInfoByToken = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const whiteLists = ['/login', '/change-password', '/forgot-password']
    return useQuery({
        queryKey: ["GET_PROFILE"],
        queryFn: () => axiosInstanceDev.get<IBaseResponse<IUser>>("users/get-info"),
        onSuccess(data) {
            if (!data || data.statusCode !== 200) return
            setCookie(APP_SAVE_KEY.LOGIN_STATUS, 'true')
            dispatch(login(data.data))
        },
        enabled: !whiteLists.includes(router.pathname)
    })
}
