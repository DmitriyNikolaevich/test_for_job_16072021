import { InfernActionTypes } from "./store"
import {put, call, takeEvery} from 'redux-saga/effects'
import { mainAPI } from "../API/mainAPI"

const initialState = {
    data: [],
    showOrderMenu: false
}

const mainReducer = (state: initialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'test_for_job_16072021/SET_ORDERS':
            return {
                ...state,
                data: action.payload.data
            }

        case 'test_for_job_16072021/SET_SHOW_ORDER_MENU':
            return {
                ...state,
                showOrderMenu: !state.showOrderMenu
            }
    
        default:
            return state
    }
}

export const actions = {
    //AC

    setOrdersAC: (data: any) => ({ type: 'test_for_job_16072021/SET_ORDERS', payload: { data } } as const),
    setShowOrderMenuAC: () => ({ type: 'test_for_job_16072021/SET_SHOW_ORDER_MENU'} as const),

    //SAGAs AC
    
    getOrdersSAGAsAC: () => ({ type: 'test_for_job_16072021/GET_ORDERS_SAGAS_AC' } as const)

}

export function* getOrdersSAGA() {
    const data: ReturnType<typeof mainAPI.getOrders> = yield call(mainAPI.getOrders)
    yield put(actions.setOrdersAC(data))
}

export function* mainSAGA() {
    yield takeEvery('test_for_job_16072021/GET_ORDERS_SAGAS_AC', getOrdersSAGA)
}

export default mainReducer


type initialStateType = typeof initialState

type ActionType = InfernActionTypes<typeof actions>