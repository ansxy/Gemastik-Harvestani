import { createContext } from "react"

export interface LahanData {
    user_id : string
    nama : string
    luas : number
    alamat : string
    
}
export interface LatLot {
    lat : number,
    lon : number
}

export interface LahanContextProps {
    add : (params : LahanData) => Promise<void>
    del : (params : LahanData) => Promise<void>
    edit : (params : LahanData) => Promise<void>
    update: (params : LahanData) => Promise<void>
    show: () => Promise<void>
    pin : (params : any) => Promise<void>
    allLahan : any

}



export const LahanContext = createContext<LahanContextProps>({
    add: async () => {},
    del : async () => {},
    edit : async () => {},
    update : async () => {},
    show : async () => {},
    pin : async() => {},
    allLahan : ""
})