import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
export const App = () => {
  let [searcParams,setSearchParams] = useSearchParams()
  let [search,setSearch] = useState(searcParams.get("searchname")?searcParams.get("searchname"):"")
  let [data,setData] = useState([
   {
    id:1,
    name:"Hojiakbar"
  },
   {
    id:2,
    name:"Abdullo"
  }
])

let handleSearch = (value) =>{
  setSearch(value)
  setSearchParams([["searchname",value]])
}
  return (
    <div>
      <input type="search" value={search} onChange={(e)=>handleSearch(e.target.value)} />

      {
        data.filter((ev)=>ev.name.toLowerCase().includes(search.trim().toLowerCase())).map((el)=>{
          return <div>
          <h1>
              {el.name}
          </h1>
          </div>
        })
      }
    </div>
  )
}
