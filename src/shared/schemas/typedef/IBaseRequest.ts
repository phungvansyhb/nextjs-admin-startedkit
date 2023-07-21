export interface IBaseRequest {
    id?: number,
    page?: number,
    pageSize?: number,
    pageIndex?: number,
    [key: string]: any
}