import { instance } from "./API"

export const mainAPI: MainAPIType = {
    getOrders() {
        return instance.get(``).then(res => res.data)
    }
}



export type GoodsType = {
    count: number
    id: string
    name: string
    price: number
}

export type OrderDataType = {
    date: string
    goods: Array<GoodsType>
    id: string
    number: string
    sale: number
}

export type MainAPIType = {
    getOrders: () => Promise<Array<OrderDataType>>
}