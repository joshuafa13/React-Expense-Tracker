import React, { useState } from 'react'
import ExpenseList from './ExpenseList'
import ExpensesFilter from './ExpensesFilter'
import ExpenseChart from './ExpensesChart'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState('2021')

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear)
  }

  const filteredExpenses = expenses.filter((expense) => expense.date.getFullYear() === Number(filterYear))

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilterChange={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList list={filteredExpenses} />
    </Card>
  )
}

export default Expenses