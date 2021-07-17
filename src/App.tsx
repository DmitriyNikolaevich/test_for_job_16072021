import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Orders } from './Components/Orders/Orders'
import { SomeMenu } from './Components/SomeMenu/SomeMenu'
import { actions } from './store/mainReducer'
import { getIsShowOrderMenu } from './store/mainSelector'

export const App = () => {

  const dispatch = useDispatch()

  const showOrderMenu = useSelector(getIsShowOrderMenu)

  useEffect(() => {
    dispatch(actions.getOrdersSAGAsAC())
  }, [])

  return (
    <div>
      <SomeMenu />
      {showOrderMenu && <Orders />}
    </div>
  )
}
