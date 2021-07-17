import React, { FC } from 'react'
import s from './Orders.module.scss'
import filter from '../../images/Filter.svg'
import { useSelector } from 'react-redux'
import { getDataSelector } from '../../store/mainSelector'
import { Item } from './Item'
import { OrderDataType } from '../../API/mainAPI'

export const Orders: FC<PropsType> = (props) => {

    const data: Array<OrderDataType> = useSelector(getDataSelector)

    const onFilterButtonClick = () => {
        console.log('Select a filter')
    }

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <span>Список заказов</span>
                <button onClick={onFilterButtonClick}><img alt="Фильтр" src={filter} /></button>
            </div>
            <div className={s.orders}>
                {data.map(item => <Item key={item.id} data={item} />)}
            </div>
        </div>
    )
}


type PropsType = {}