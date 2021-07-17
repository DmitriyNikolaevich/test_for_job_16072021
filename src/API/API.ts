import Axios from "axios"


export const instance = Axios.create({
    withCredentials: false,
    baseURL: 'https://u38027.netangels.ru/api/orders.php'
})