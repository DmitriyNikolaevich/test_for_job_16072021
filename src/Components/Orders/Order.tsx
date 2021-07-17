import React, { Dispatch, FC, SetStateAction } from 'react'
import s from './Order.module.scss'
import closeIMG from '../../images/Close.svg'
import { OrderDataType } from '../../API/mainAPI'
import { OrderItem } from './OdrerItem'

export const Order: FC<PropsType> = ({ close, data }) => {
    

    const onCloseClick = () => {
        close(prev => !prev)
    }
    
    return <div className={s.wrapper}>
        <div className={s.header}>
            <div className={s.orderDetails}>
                <div>Заказ №{data.number}</div>
                <div>
                    {data.date 
                        ?`${data.date.split('T')[1].split(':').slice(0, 2).join(':')} ${data.date.split('T')[0].split('-')[2]}.${data.date.split('T')[0].split('-')[1]}.${data.date.split('T')[0].split('-')[0].slice(2, 4)}`
                        : ' '}
                </div>
            </div>
            <div>
                <button onClick={onCloseClick}><img alt="Закрыть" src={closeIMG} /></button>
            </div>
        </div>
        <div className={s.description}>
            <div>
                Товар
            </div>
            <div>
                Наименование товара
            </div>
        </div>
        <div className={s.orderItems}>
            {data.goods.map(el => <OrderItem key={el.id} data={el} />)}
        </div>
        <div className={s.footer}>
            <div className={s.totalSale}>
                {`Скидка по товару составит ${data.sale }%`}
            </div>
            <div className={s.total}>
                {`Итого: ${(data.goods.map(el => el.price * el.count).reduce((a, b) => a + b) * ((100 - data.sale)/100)).toFixed(2)}`}
            </div>
            <div className={s.delivery}>
                <span>Дата выдачи заказа 10 дней с момента оплаты</span>
            </div>
        </div>
    </div>
}


type PropsType = {
    close: Dispatch<SetStateAction<boolean>>
    data: OrderDataType
}