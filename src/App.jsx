import React, { createContext, useState } from 'react'
import A from '../components/A'
export let cntContext = createContext(0)


const App = () => {
let [count,setCount] = useState(0)
  return (
    
    <cntContext.Provider value={count}>
        <button onClick={()=> setCount((prev)=>prev=100)}>reset</button> <br />
        <button onClick={()=> setCount((prev)=>prev-1)}>-</button>
      <A/>     
  <button onClick={()=> setCount((prev)=>prev+1)}>+</button> <br />
  <button onClick={()=> setCount((prev)=>prev=0)}>reset</button>
    </cntContext.Provider>
  )
}
export default App