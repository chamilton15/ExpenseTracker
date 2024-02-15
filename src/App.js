import React, { useState } from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Basketball",
    amount: 50,
    date: new Date(2023, 7, 14),
  },
  { id: "e2", title: "Spikeball", amount: 55, date: new Date(2023, 2, 12) },
  {
    id: "e3",
    title: "Football",
    amount: 20,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "Ball Pump",
    amount: 11.50,
    date: new Date(2024, 1, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
