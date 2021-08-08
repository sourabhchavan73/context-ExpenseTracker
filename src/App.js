import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransctionList from './components/TransctionList';
import Addtranstion from './components/Addtranstion';
import { GlobalProvider } from './context/GlobalState'

const App = () => {
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpense />
                <TransctionList />
                <Addtranstion />
            </div>
        </GlobalProvider>
    )
}

export default App
