import React from 'react'
import Expenses from './components/Expenses/Expenses'

const App = () => {
  const info = [
    {
      title: 'Car Insurance',
      amount: '$256.05',
      date: new Date(2021, 7, 17),
    },
    {
      title: 'Lunch',
      amount: '$26.05',
      date: new Date(2021, 6, 18),
    },
    {
      title: 'TV',
      amount: '$526.15',
      date: new Date(2021, 3, 5),
    },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={info} />
    </div>
  );
}

export default App;
