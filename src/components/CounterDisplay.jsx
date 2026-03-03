import React from 'react'
import { useContext } from 'react'
import { ContextProvider } from './Context'

//props = {val: {count}}

function CounterDisplay() {

  const context = useContext(ContextProvider)
  const {count} = context

  return (
    <div>
      The value of count is {count}
    </div>
  )
}

export default CounterDisplay