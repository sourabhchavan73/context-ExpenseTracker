import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const { transctions } = useContext(GlobalContext)

    const updateBalance = () => {
        const amounts = transctions.map(transction => transction.amount);
        return amounts.reduce((acc, item) => (acc += item),0).toFixed(2)
    }

    return (
        <>
            <h4>Your Balance</h4>
            <h1 >${updateBalance()}</h1>
        </>
    )
}

export default Balance
