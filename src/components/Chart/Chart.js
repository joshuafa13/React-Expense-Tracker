import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = ({ months }) => {
  const valueArr = months.map((month) => month.value)
  const maxValue = Math.max(...valueArr)
  return (
    <div className="chart">
      {
        months.map((month) => (
          <ChartBar
            key={month.label}
            value={month.value}
            maxValue={maxValue}
            label={month.label}
          />
        ))
      }
    </div>
  )
}

export default Chart