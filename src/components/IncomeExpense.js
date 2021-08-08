import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpense = () => {
    const { transctions } = useContext(GlobalContext)

    const updateIncome = () => {
        const items = transctions.filter(transction => transction.amount > 0 )
        return items.map(item => item.amount).reduce((acc, item) => (acc += item), 0).toFixed(2);   
    }

    const updateExpense = () => {
        const items = transctions.filter(transction => transction.amount < 0 )
        return items.map(item => item.amount).reduce((acc, item) => (acc += item), 0).toFixed(2) * -1; 
    }

    return (

        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{updateIncome()}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{updateExpense()}</p>
            </div>
        </div>
    )
}

export default IncomeExpense;
