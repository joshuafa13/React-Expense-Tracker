import React, { useState } from 'react'

import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({ onAddExpense }) => {
  const [expend, setExpend] = useState(false)

  const addExpenseHandler = (expenseData) => {
    const expense = { ...expenseData, id: Math.random().toString() }
    onAddExpense(expense)
    setExpend(false)
  }

  const expendHandler = () => {
    setExpend((prevState) => (
      !prevState
    ))
  }

  return (
    <div className="new-expense">
      {!expend && <button onClick={expendHandler}>Add New Expense</button>}
      {expend && <ExpenseForm onAddExpense={addExpenseHandler} onCancel={expendHandler} />}
    </div>
  )
}

export default NewExpense