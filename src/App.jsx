import './App.css'

import React from 'react'
import Card from '../components/Card'
import img1 from '/src/assets/img1.png'

function App() {
  let data = [
    {
      name:"Screen",
      img:img1
    }
  ]
  return (
    <>
    {
    data.map((e)=>{
      return <Card {...e}/>
    })
    }
    <Card name="Abdullo" />
    </>
  )
}
export default App
