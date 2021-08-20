import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({ list }) => {
  if (list.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>
  }
  return (
    <ul className="expenses-list">
      {
        list.map((e) => (
          <ExpenseItem
            key={e.id}
            title={e.title}
            date={e.date}
            amount={e.amount}
          />
        ))
      }
    </ul>
  )
}

export default ExpenseList