import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transction from './Transction';


const TransctionList = () => {
    const context = useContext(GlobalContext);

    return (
        <>
            {/* {console.log(context)} */}
            <h3>History</h3>
            <ul className="list">
                {context.transctions.map(transction => (
                    <Transction key={transction.id} transction={transction} />
                ))}
            </ul>
        </>
    )
}

export default TransctionList
