import React, { FC } from 'react'
import { GoodsType } from '../../API/mainAPI'
import s from './OrderItem.module.scss'

export const OrderItem: FC<PropsType> = ({ data }) => {

    return (
        <div className={s.wrapper}>
            <div className={s.description}>
                <div>
                    {data.name}
                </div>
                <div>
                    {`Количество  ${data.count} шт`}
                </div>
            </div>
            <div className={s.coast}>
                {`${data.price} Р`}
            </div>
        </div>
    )
}


type PropsType = {
    data: GoodsType
}