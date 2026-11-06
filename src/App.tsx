import React, { createContext, useReducer } from 'react'
import type { Dispatch } from 'react'
import A from '../components/A'

export type User = { id: number; name: string }

export type Action =
   | { type: 'create'; payload: User }
   | { type: 'update'; payload: User }
   | { type: 'delete'; payload: number }

type ContextType = {
  state: User[]
  dispatch: Dispatch<Action>
}

export let cntContext = createContext<ContextType | null>(null)

function reducer(state: User[], action: Action): User[] {
  if (action.type === 'create') {
    return [...state, action.payload]
  }
  if (action.type === 'update') {
    return state.map((item) =>
      item.id === action.payload.id ? action.payload : item
    )
  }
  if (action.type === 'delete') {
    return state.filter((item) => item.id !== action.payload)
  }
  return state
}

const initialUsers: User[] = [
  { id: 1, name: 'Ahmad' },
  { id: 2, name: 'Ali' },
  { id: 3, name: 'Abdullo' },
]

const App = () => {
  let [state, dispatch] = useReducer(reducer, initialUsers)

  return (
    <cntContext.Provider value={{ state, dispatch }}>
      <A />
    </cntContext.Provider>
  )
}
export default App