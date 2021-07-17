import React, { FC, useState } from 'react'
import { OrderDataType } from '../../API/mainAPI'
import s from './Item.module.scss'
import { Order } from './Order'

export const Item: FC<PropsType> = ({ data }) => {

    const [showOrder, setShowOrder] = useState(false)

    const date = new Date()

    const onOrderClick = () => {
        setShowOrder(prev => !prev)
    }
    
    
    return (
        <>
        <div className={s.wrapper} onClick={onOrderClick}>
            <div className={s.details}>
                <div>
                    <h4>Заказ №{data.number}</h4>
                    <span>{(data.goods.map(el => el.price * el.count).reduce((a, b) => a + b) * ((100 - data.sale)/100)).toFixed(2)} Р</span>
                </div>
                <div>
                {data.date ? 
                date.getDate() === +data.date.split('T')[0].split('-')[2] 
                    ? <span>{`Сегодня: ${data.date.split('T')[1]}`}</span> 
                    : <span>{`${data.date.split('T')[0].split('-')[2]}.${data.date.split('T')[0].split('-')[1]}.${data.date.split('T')[0].split('-')[0].slice(2, 4)}: ${data.date.split('T')[1].split(':').slice(0,2).join(':')}`}</span> 
                        : ' '}
                </div>
            </div>
            <div className={s.goods}>
                <ul>
                    <li>
                        {`Товаров ${data.goods.length}шт.`}
                    </li>
                    <li>
                        {`Наименований ${new Set(...data.goods.map(item => item.name)).size}шт.`}
                    </li>
                </ul>
            </div>
        </div>
        {showOrder && <Order close={setShowOrder} data={data} />}
        </>
    )
}


type PropsType = {
    data: OrderDataType
}