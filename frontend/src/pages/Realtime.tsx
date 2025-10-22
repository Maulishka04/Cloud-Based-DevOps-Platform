import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

export default function Realtime(){
  const [messages, setMessages] = useState<string[]>([])
  useEffect(()=>{
    const sock = io('http://localhost:3001')
    sock.on('connect', ()=> console.log('connected'))
    sock.on('msg', (m:string)=> setMessages(prev=>[m,...prev]))
    return ()=>{ sock.disconnect() }
  },[])

  return (
    <div className="container">
      <h1>Realtime Demo</h1>
      <ul>
        {messages.map((m,i)=>(<li key={i}>{m}</li>))}
      </ul>
    </div>
  )
}
