import { AppStateType } from "./store"

export const getDataSelector = (state: AppStateType) => {
    return state.main.data
}

export const getIsShowOrderMenu = (state: AppStateType) => {
    return state.main.showOrderMenu
}