import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import SomeMenuButton from '../../images/SomeMenu.svg'
import { actions } from '../../store/mainReducer'
import s from './SomeMenu.module.scss'

export const SomeMenu: FC<PropsType> = (props) => {

    const dispatch = useDispatch()

    const buttonClick = () => {
        dispatch(actions.setShowOrderMenuAC())       
    }
    return (
        <div>
            <button className={s.button} onClick={buttonClick}><img alt='Some menu' src={SomeMenuButton} /></button>
        </div>
    )
}


type PropsType = {}