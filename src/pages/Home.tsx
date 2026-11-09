import { useTodo } from '@/store/todo'
import React, { useEffect, useState } from 'react'

const Home = () => {

  const {data , getData , getDelete , getAdd} = useTodo()
  const [name , setName] = useState("")
  const [description , setDesc] = useState("")

  async function handelAdd(e) {
    e.preventDefault()
    let formData = new FormData()
    formData.append("Name",e.target.name.value)
    formData.append("Description", e.target.description.value)
    for(let el of e.target.image.files){
      formData.append("images",el)
    }
    getAdd(formData)
    setName("")
    setDesc("")
  }

  
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
        <form onSubmit={handelAdd}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input value={description} onChange={(e) => setDesc(e.target.value)} placeholder="Description" />
        <input type="file" multiple name="image" id="" />
        <button type="submit">Add</button>
      </form>

      {
        data.map((e)=>{
          return <div key={e.id}>
            <h1>{e.name}</h1>
            <p>{e.description}</p>
            <button onClick={()=>getDelete(e.id)}>Delete</button>
          </div>
        })
      }
    </div>
  )
}

export default Home