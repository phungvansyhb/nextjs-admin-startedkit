import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { deleteCookie } from 'cookies-next';
import { APP_SAVE_KEY } from '../utils/constants/appContants';


type APPSTATE = {
    user: any | undefined,
    isLogined: boolean,
    isCollapseMenu: boolean,
    isRouteLoading: boolean,
}

const initialState: APPSTATE = {
    user: undefined,
    isLogined: false,
    isCollapseMenu: false,
    isRouteLoading: false
}
export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any | undefined>) => {
            state.user = action.payload
            state.isLogined = true
        },
        logout: (state) => {
            state.user = undefined
            state.isLogined = false
            deleteCookie(APP_SAVE_KEY.REFRESH_TOKEN_KEY)
            deleteCookie(APP_SAVE_KEY.TOKEN_KEY)
            deleteCookie(APP_SAVE_KEY.LOGIN_STATUS)
        },
        toggleMenu: (state, action: PayloadAction<boolean>) => {
            state.isCollapseMenu = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isRouteLoading = action.payload
        }
      

    }
}
)
export const { login, logout, toggleMenu, setLoading } = appSlice.actions
export default appSlice.reducer
