import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [formUp, setFormUp] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setFormUp(false);
    };

    const startEditingHandler = () => {
        setFormUp(true);
    }

    const onEntry = () => {
        setFormUp(false);
    }

    return (
        <div className="new-expense">
            {formUp && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onEntry} />}
            {!formUp && <button onClick={startEditingHandler}>Add New Expense</button>}
        </div>
    )
};

export default NewExpense;