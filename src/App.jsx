import '/src/App.css'
import React, { useState } from 'react'
const App = () => {
  let [data,setData] = useState([{
    id:1,
    name:"Abdullo",
    age:16
  }])
let [search, setSearch] = useState("")
  let [open,setOpen] = useState(false)
  let [idx,setIdx] = useState(null)
  let [editName,setEditName] = useState("")
  let [editAge,setEditAge] = useState("")

  let handleDelete =(id)=>{
    setData(data.filter((e)=>e.id!=id))
  }

  let handleAdd =(e)=>{
    e.preventDefault()
      let newUser = {
        id:Date.now(),
        name:e.target.name.value,
        age:e.target.age.value
      }
      setData([...data,newUser])
      e.target.reset()
  }


  let handleEdit =(e)=>{
    e.preventDefault()
      let newUser = {
        id:idx,
        name:editName,
        age:editAge
      }
      setData(data.map((e)=>e.id==idx?newUser:e))
      e.target.reset()
      setOpen(false)
  }
let filteredData = data.filter((e) =>
  e.name.toLowerCase().includes(search.toLowerCase().trim())
)

  return (
    <div className='div'>

      <input className='search' type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
<div className='add'>
      <form  onSubmit={handleAdd}>
        <input type="text" name='name' />
        <input type="number" name='age' />
        <button type='submit'>Add</button>
      </form>
      </div>


     {
      filteredData.map((e)=>{
        return <div key={e.id}>
        <h1>{e.name}</h1>
        <p>{e.age}</p>
        <button onClick={()=>handleDelete(e.id)}>Delete</button> <br />
        <button onClick={()=>{setOpen(true),setEditName(e.name),setEditAge(e.age),setIdx(e.id)}}>edit</button>
        <button type="button" onClick={() => setOpen(false)}>
  Cancel
</button>
        {open? <form  onSubmit={handleEdit}>
        <input value={editName} onChange={(e)=>setEditName(e.target.value)} type="text" name='name' />
        <input value={editAge} onChange={(e)=>setEditAge(e.target.value)} type="number" name='age' />
        <button type='submit'>edit</button>
      </form>:null}
        </div>
      })
     }
    </div>
  )
}

export default App