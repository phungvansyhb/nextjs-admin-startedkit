export interface IBaseResponse<T> {
    statusCode: number,
    data: T,
    message: string
}
export interface IBaseResponseWithCount<T> {
    content: T,
    totalPages: number,
    totalElements: number,
}
export interface IBaseAmadeusResponse<T> {
    meta: {
        count: number
    },
    data: T
}