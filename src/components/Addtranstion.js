import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Addtranstion = () => {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const { addTransction }= useContext(GlobalContext)

    const formController = (e) => {
        e.preventDefault();
        const newTransction = { 
            id: Math.floor(Math.random() * 10000),
            text,
            amount: +amount
        }
        addTransction(newTransction)
    }

    return ( 
        <>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={formController}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input 
                        type="text" 
                        value={text} 
                        onChange = {(e) => setText(e.target.value)}
                        placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount" >Amount <br />(negative - expense, positive - income)</label>
                    <input 
                        type="number"  
                        value={amount}
                        onChange  = {(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>   
        </>
    )
}

export default Addtranstion;
