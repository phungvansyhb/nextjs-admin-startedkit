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



/* 
export const useLogin = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { toast } = useToast()
    return useMutation({
      mutationFn: (User: {
        username: string,
        password: string
      }) => axiosInstance.post<IBaseResponse<ILoginedUser>>('/auth/login', User),
      onSuccess: (data) => {
        if (!data.data.token) return
        setCookie(APP_SAVE_KEY.TOKEN_KEY, data.data.token)
        setCookie(APP_SAVE_KEY.USER_DATA, JSON.stringify(data.data.user))
        setCookie(APP_SAVE_KEY.LOGIN_STATUS, 'true')
        dispatch(login(data.data))
        toast({
          variant: 'success',
          title: "Đăng nhập thành công",
          description: "Chào mừng bạn đăng nhập vào hệ thống",
        })
        router.push('/worklog')
  
      },
      onError(error, variables, context) {
        toast({
          variant: 'destructive',
          title: "Đăng nhập thất bại",
          description: "Vui lòng kiểm tra lại thông tin đăng nhập và mật khẩu",
        })
        console.log(error)
      },
    })
  }
  export const useGetListUser = () => {
    return usePagination<IBaseResponse<IBaseResponseWithCount<IUser[]>>>({
      queryKey: [QUERY_KEY],
      apiFn: (params?: ISearchParams) => axiosInstance.post('/user/search', { ...params }),
      defaultParams: {
        page: 0,
        size: 10,
        sorts: [{ field: 'updatedDate', direction: 'DESC' }]
      }
    })
  }
  
  export const useGetAllUser = (options?: Partial<UseQueryOptions>) => {
    return useQuery({
      queryKey: [QUERY_KEY, 'get-All'],
      queryFn: () => axiosInstance.get<IBaseResponse<IUser[]>>('/user/get-all/'),
      select(data) {
        return data.data
      },
      enabled: options?.enabled
    })
  }
  
  export const useGetDetailUser = ({ id, options }: { id: React.Key, options: Partial<UseQueryOptions> }) => {
    return useQuery({
      queryKey: [QUERY_KEY, 'get-detail'],
      queryFn: () => axiosInstance.get<IBaseResponse<IUser>>('/user/get-by-id/' + id),
      select(data) {
        return data.data
      },
      enabled: options?.enabled
    })
  }
  export const useDeleteUser = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    return useMutation({
      mutationFn: ({ listUserIds }: { listUserIds: React.Key[] }) => axiosInstance.put('/user/delete', { listIds: listUserIds }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
        if (onSuccessHandle) onSuccessHandle()
      },
      onError: (err) => {
        console.log(err)
      }
    })
  }
  export const useCreateUser = (onSuccessHandle: () => void) => {
    const queryClient = useQueryClient()
    return useMutation({
      mutationFn: (User: IUser) => axiosInstance.post('/user/create', User),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
        if (onSuccessHandle) onSuccessHandle()
      },
    })
  }
  export const useUpdateUser = (onSuccessHandle: () => void) => {
    const queryClient = useQueryClient()
    return useMutation({
      mutationFn: ({ User, id }: { User: IUser, id: React.Key }) => axiosInstance.put('/User/update/' + id, User),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
        if (onSuccessHandle) onSuccessHandle()
      },
    })
  }
 */  