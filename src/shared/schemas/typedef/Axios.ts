import {APP_SAVE_KEY} from '@/shared/utils/constants/appContants';
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {deleteCookie, getCookie, setCookie} from 'cookies-next';
import {IBaseResponse} from './IBaseResponse';

class Axios {
    private api: AxiosInstance;

    constructor(baseURL: string, noAuth: boolean) {
        this.api = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!noAuth) {
            this.api.interceptors.request.use(
                (config) => {
                    const accessToken = this.getAccessToken();
                    if (accessToken) {
                        config.headers.Authorization = `Bearer ${accessToken}`;
                    }
                    return config;
                },
                (error) => {
                    return Promise.reject(error);
                }
            );
        }

        this.handleResponse(this.api)
    }

    handleResponse(axios: AxiosInstance) {
        axios.interceptors.response.use(
            async (response: AxiosResponse) => {
                const originalRequest = response.config
                if (typeof window !== 'undefined') {
                    const statusCode = response.data.statusCode
                    switch (statusCode) {
                        case 403:
                            window.location.href = '/login'
                            deleteCookie(APP_SAVE_KEY.TOKEN_KEY)
                            deleteCookie(APP_SAVE_KEY.REFRESH_TOKEN_KEY)
                            break;
                        case 401:
                            try {
                                await this.refreshToken();
                                // this.api.request(originalRequest)
                            } catch (e) {
                                // window.location.href = '/login'
                            }
                            break;
                        default:
                            break;
                    }
                }
                return response;
            },
            async (error) => {
                const originalRequest = error.config;
                if (error.response.status === 403 && typeof window !== 'undefined') {
                    window.location.href = '/login'
                    deleteCookie(APP_SAVE_KEY.TOKEN_KEY)
                    deleteCookie(APP_SAVE_KEY.REFRESH_TOKEN_KEY)
                }
                if (error.response.status === 401 && typeof window !== 'undefined') {
                    try {
                        await this.refreshToken();
                        // this.api.request(originalRequest)
                    } catch (e) {
                        window.location.href = '/login'
                    }
                }
                return Promise.reject(error);
            }
        );
    }
    async get<T>(url: string, configs?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.api.get<T>(url, configs);
            return response.data;
        } catch (error) {
            console.error('GET request failed:', error);
            throw error;
        }
    }

    async post<T>(url: string, data: any, configs?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.api.post<T>(url, data, configs);

            return response.data;
        } catch (error) {
            console.error('POST request failed:', error);
            throw error;
        }
    }

    async put<T>(url: string, data?: any, configs?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.api.put<T>(url, data, configs);
            return response.data;
        } catch (error) {
            console.error('PUT request failed:', error);
            throw error;
        }
    }

    async delete<T>(url: string, configs?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.api.delete<T>(url, configs);
            return response.data;
        } catch (error) {
            console.error('DELETE request failed:', error);
            throw error;
        }
    }

    private getAccessToken(): string {
        return getCookie(APP_SAVE_KEY.TOKEN_KEY) as string
    }
    private getRefreshToken(): string {
        return getCookie(APP_SAVE_KEY.REFRESH_TOKEN_KEY) as string
    }
    private async refreshToken() {
        if (!getCookie(APP_SAVE_KEY.REFRESH_TOKEN_KEY)) throw Error('No Token in cookie')
        try {
            const Xaxios = axios.create(
                {
                    baseURL: process.env.NEXT_PUBLIC_DEV_API_URL,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )
            this.handleResponse(Xaxios)
            const data = await Xaxios.post<IBaseResponse<any>>(`/auth/refresh-token`,
                {
                    refreshToken: this.getRefreshToken()
                })
            const res = data.data.data
            if (!res.token) throw Error('No Token in cookie')
            setCookie(APP_SAVE_KEY.TOKEN_KEY, res.token)
            setCookie(APP_SAVE_KEY.REFRESH_TOKEN_KEY, res.refreshToken)
            setCookie(APP_SAVE_KEY.LOGIN_STATUS, 'true')
            window.location.reload()
        } catch (e) {
            console.log(e)
            throw Error('Call api refreshToken fail')
        }
    }
}


export const axiosInstance = new Axios(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001', false);
export const axiosInstanceNoAuth = new Axios(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001', true);
