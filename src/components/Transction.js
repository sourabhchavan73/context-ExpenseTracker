import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

const Transction = (props) => {
    const { deleteTransction } = useContext(GlobalContext)
    const sign = props.transction.amount < 0 ? '-' : '+';

    return ( 
        <>
            <li className={props.transction.amount < 0 ? 'minus' : 'plus'}>
                {props.transction.text} 
                <span>{sign}${Math.abs(props.transction.amount)}</span>
                <button onClick={() => deleteTransction(props.transction.id)} className="delete-btn">x</button>
            </li>
        </>
    )
}

export default Transction
