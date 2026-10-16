import React, { useEffect, useState } from 'react'
import axios from 'axios'

let api = "https://6a800eddec7a640e63ab8c2c.mockapi.io/js2_2"

const App = () => {
  const [data, setData] = useState([])

  async function getData() {
    try {
      let res = await fetch(api)
      let result = await res.json()
      setData(result)
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteUser(id) {
    try {
      await axios.delete(`${api}/${id}`)
      getData()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {data.map((e) => (
        <div key={e.id}>
          <h1>{e.name}</h1>
          <button onClick={() => deleteUser(e.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  )
}

export default App