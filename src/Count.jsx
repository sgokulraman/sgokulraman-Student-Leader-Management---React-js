import React,{useContext} from 'react'
import { CountContext } from './CountContext'

export default function Count() {
 let {Count,Increment} = useContext(CountContext)
  return (
    <div>
      <h1>Count - {Count}</h1>
      <button onClick={Increment}>Change</button>
    </div>
  )
}
