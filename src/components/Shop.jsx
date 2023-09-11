import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actioncreators} from '../state/index'


function Shop() {
  const amount = useSelector(state => state.amount);

  const dispatch = useDispatch();
  // const actions = bindActionCreators(actioncreators, dispatch)
  const {withdrawMoney, depositeMoney} = bindActionCreators(actioncreators, dispatch)

  return (
    <div>
    <h2>Deposite/Withdraw money</h2>
        {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actioncreators.withdrawMoney(100))}}>-</button>
        Update balance
        <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actioncreators.depositeMoney(100))}}>+</button> 
        */}

        {/* <button className="btn btn-primary mx-2" onClick={()=>{actions.withdrawMoney(100)}}>-</button>
        Update balance
        <button className="btn btn-primary mx-2" onClick={()=>{actions.depositeMoney(100)}}>+</button>
         */}

        <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
        Update balance ({amount})
        <button className="btn btn-primary mx-2" onClick={()=>{depositeMoney(100)}}>+</button>
    </div>
  )
}

export default Shop