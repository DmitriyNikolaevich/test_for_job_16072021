import { useDispatch } from "react-redux"
import { applyMiddleware, combineReducers, createStore } from "redux"
import mainReducer, { mainSAGA } from "./mainReducer"
import createSagaMiddleware from 'redux-saga'

const commonReducer = combineReducers({
    main: mainReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(commonReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mainSAGA)

export default store

type RootReducerType = typeof commonReducer
export type AppStateType = ReturnType<RootReducerType>

type ProppertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InfernActionTypes<T extends {[key: string]: (...arg: any[]) => any}> = ReturnType<ProppertiesTypes<T>>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()