import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query"
import { axiosInstanceDev, axiosInstanceNews } from "../typedef/Axios"
import { IBaseResponse } from "../typedef/IBaseResponse"

export interface IProvinceModel {
    provinceId: number,
    provinceName: string
}
export interface IDistrictModel {
    districtId: number,
    districtName: string
}
export interface IWardModel {
    wardId: number,
    wardName: string
}
export interface ICountryModel {
    id: number,
    name: string,
    code: string // phoneCode
}
export interface ITimeZone {
    id: number,
    timeZone: string
}
export interface ILanguage {
    id: number,
    languageName: string
}
export interface IBank {
    id: string,
    bankName: string
}

export const useUploadImage = (onSuccessHandle?: () => void) => {
    return useMutation({
        mutationFn: (formData: { file: File }) => axiosInstanceNews.post<IBaseResponse<string>>('/uploads/upload-image', formData, { headers: { "Content-Type": 'multipart/form-data' } }),
        onSuccess: (data) => {
            if (onSuccessHandle) onSuccessHandle()
        }
    })
}

export const useGetProvinces = () => {
    return useQuery({
        queryKey: ['getListProvince'],
        queryFn: () => axiosInstanceDev.get<IBaseResponse<IProvinceModel[]>>('/provinces'),
        select(data) {
            return data.data.map(item => ({
                // id: item.provinceId,
                label: item.provinceName,
                value: item.provinceId
            }))
        },
    })
}

export const useGetDistricts = (provinceId: number | undefined, options?: UseQueryOptions) => {
    return useQuery({
        queryKey: ['useGetDistricts', provinceId],
        queryFn: () => axiosInstanceDev.get<IBaseResponse<IDistrictModel[]>>(`/provinces/${provinceId}/districts`),
        select(data) {
            return data.data.map(item => ({
                value: item.districtId,
                label: item.districtName,
                // value: item.districtName,
            }))
        },
        enabled: options?.enabled
    })
}
export const useGetWards = (provinceId: number | undefined, districtId: number | undefined, options?: UseQueryOptions) => {
    return useQuery({
        queryKey: ['useGetWard', provinceId, districtId],
        queryFn: () => axiosInstanceDev.get<IBaseResponse<IWardModel[]>>(`/provinces/${provinceId}/districts/${districtId}/wards`),
        select(data) {
            return data.data.map(item => ({
                value: item.wardId,
                label: item.wardName,
                // value: item.wardName
            }))
        },
        enabled: options?.enabled
    })
}

export const useGetCountries = (options?: UseQueryOptions) => {
    return useQuery({
        queryKey: ['getCountry'],
        queryFn: () => axiosInstanceDev.get<IBaseResponse<ICountryModel[]>>(`/provinces/country-code`),
    })
}

export const useGetTimeZone = (options?: UseQueryOptions) => {
    return useQuery({
        queryKey: ['getTimeZones'],
        queryFn: () => axiosInstanceDev.get<IBaseResponse<ITimeZone[]>>(`/timezone/get-all`),
    })
}

export const useGetLanguages = (options?: UseQueryOptions) => {
    return useQuery({
        queryKey: ['getLanguages'],
        queryFn: () => axiosInstanceDev.get<IBaseResponse<ILanguage[]>>(`/languages/get-all`),
        select(data) {
            return data.data.map(item => ({
                value: item.languageName,
                label: item.languageName
            }))
        },
    })
}
export const useGetListBank = (options?: UseQueryOptions) => {
    return useQuery({
        queryKey: ['getBanks'],
        queryFn: () => axiosInstanceDev.get<IBaseResponse<IBank[]>>(`/banks/get-all`),
        select(data) {
            return data.data.map(item => ({
                value: item.bankName,
                label: item.bankName
            }))
        },
    })
}