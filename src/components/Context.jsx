import React from 'react'
import CounterButton from './CounterButton'
import CounterDisplay from './CounterDisplay'
import { createContext } from 'react'

const ContextProvider = createContext()

function Context() {

  const [count, setCount] = React.useState(0)

  return (
    <ContextProvider.Provider value={{count, setCount}}>
      <CounterButton />
      <CounterDisplay />
    </ContextProvider.Provider>
  )
}

export {Context, ContextProvider}