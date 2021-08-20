import React, { useState } from 'react'

import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'

const App = () => {
  const dummy_data = [
    {
      id: 1,
      title: 'Car Insurance',
      amount: '256.05',
      date: new Date(2021, 7, 17),
    },
    {
      id: 2,
      title: 'Lunch',
      amount: '26.05',
      date: new Date(2020, 6, 18),
    },
    {
      id: 3,
      title: 'TV',
      amount: '526.15',
      date: new Date(2021, 3, 5),
    },
  ]
  const [expenses, setExpenses] = useState(dummy_data)

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => (
      [expense, ...prevState]
    ))
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
