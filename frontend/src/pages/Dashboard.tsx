import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = Array.from({length: 24}).map((_,i)=>({t: i, usage: 50 + 10*Math.sin(2*Math.PI*i/24) + Math.random()*2}))

export default function Dashboard(){
  return (
    <div className="container">
      <h1>CloudDevOpsHub Dashboard</h1>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="t" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="usage" stroke="#0b5cff" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
