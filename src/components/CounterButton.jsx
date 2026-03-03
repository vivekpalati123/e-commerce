import React from 'react'
import { useContext } from 'react'
import { ContextProvider } from './Context'

//props = {val: {count, setCount}}

function CounterButton() {

  const context = useContext(ContextProvider)
  const {count, setCount} = context

  return (
    <div>
      <button onClick={()=>{setCount(pre => pre + 1)}}> + </button>
      <button onClick={()=>{setCount(pre => pre - 1)}}> - </button>
    </div>
  )
}

export default CounterButton