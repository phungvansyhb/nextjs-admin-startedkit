import type {AppDispatch, RootState} from '../stores/index'
import type {TypedUseSelectorHook} from 'react-redux'
import {useDispatch, useSelector} from 'react-redux'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
