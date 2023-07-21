import { UseQueryOptions, useQuery } from "@tanstack/react-query"
import { axiosInstanceDev } from "../typedef/Axios"
import dataFake from '@/shared/mocks/db.json'
import { FLIGHTTYPE } from "../typedef/IFlightType"
import { IFlightSearch } from "../typedef/IFlightSearch"


export type Flight = typeof dataFake.flights
export interface Adult {
    basic_infor: {
        name: string,
        mid_name: string,
        surName: string,
        date: number,
        month: number,
        year: number
        type_fight: string,
        e_ticket: number,
    }
    identity_doc: {
        docs: string,
        number: number,
        country: string,
        date: string,
    }
}
export interface Child { }
export interface Ifant { }

export type BOOKING_STATE = {
    currentStep: number,
    type: FLIGHTTYPE,
    valueSearch: Partial<IFlightSearch>,
    isSearched: boolean
    resultSearch: Flight[] | undefined,
    chooseFlights: Flight[] | undefined
    traveler : any[ ]

}

export const useGetListFlight = ({ ...rest }: Partial<UseQueryOptions>) => {
    return useQuery({
        queryKey: ['useGetListFlight'],
        queryFn: () => axiosInstanceDev.get<Flight[]>('/flights'),
    })
}