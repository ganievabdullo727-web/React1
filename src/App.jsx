import React, { useState } from 'react'
import Modal from './Modal'
import { Button, TextField } from '@mui/material'
import { red } from '@mui/material/colors'

const App = () => {
  const [data,setData] = useState([{
    id:1,
    name:"Fasehuddin",
    age:"19",
    status:false
  },{
    id:2,
    name:"Muhammad",
    age:16,
    status:false

  }])
  const [openAdd,setOpenAdd] = useState(false)
  const [openEdit,setOpenEdit] = useState(false)
  const [elemEdit,setElemEdit] = useState(null)
  

  const handleSubmitAdd =(event)=>{
event.preventDefault()
const newUser ={
  id:Date.now(),
  name:event.target.name.value,
  age:event.target.age.value,
  status:event.target.status.value,
  status:false
}
setData((prev)=>[...prev,newUser])
setOpenAdd((prev)=>!prev)
  }

  const handleSubmitEdit =(event)=>{
    event.preventDefault()
   
  setData((prev)=>prev.map((e)=>e.id == elemEdit.id?elemEdit:e))
  setOpenEdit((prev)=>!prev)
    }
  const handleDelete=(id)=>{
    setData((prev)=>prev.filter((e)=>e.id!=id))
  }
  const handleEdit=(e)=>{
    setOpenEdit(true)
    setElemEdit(e)
  }
  return (
    <div>

            <Button sx={{color:"green", border:"1px solid green"}}  onClick={()=>setOpenAdd((prev)=>!prev)} variant="outlined" href="#outlined-buttons">Add+</Button>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"15px", margin:"10px"}}>
         {
        data.map((e)=>{
          return <div style={{border:"1px solid grey", padding:'10px', fontSize:"20px"}}>
            <h1>Name:{e.name}</h1>
            <p>Age: {e.age}</p>
            <p>Status:{e.status?'Active':'Inactive'}</p>
            <Button onClick={()=>handleEdit(e)} variant="outlined" href="#outlined-buttons">Edit</Button>
            <Button sx={{color:"red", border:"1px solid red"}} onClick={()=>handleDelete(e.id)} variant="outlined" href="#outlined-buttons">Delete</Button>
            <input checked={e.status} onChange={()=> setData((prev)=> prev.map((el)=> el.id==e.id ? {...el,status:!el.status} : el))} type="checkbox" className='w-5 h-5 ml-2'  />
          </div>
        })
}
      </div>
<Modal open={openAdd} setOpen={setOpenAdd} title="Add">
<form  onSubmit={handleSubmitAdd} style={{display:'grid', width:"50%", margin:"0 auto", gap:"10px"}} action="">
  <TextField id="standard-basic" label="Name" variant="standard" name="name" placeholder="Name" />
  <TextField id="standard-basic" label="Age" variant="standard" name="age" placeholder="Age" />  
  <select name="status" id="">
    <option value="true">Active</option>
    <option value="false">Inactive</option>
  </select>
  <Button variant="outlined" type="submit">Save</Button>
</form>
</Modal>
<Modal open={openEdit} setOpen={setOpenEdit} title="Edit">
<form  onSubmit={handleSubmitEdit} style={{display:'grid', width:"50%", margin:"0 auto", gap:"10px"}} action="">
    <TextField value={elemEdit?.name} onChange={(e)=>setElemEdit((prev)=>({...prev,name:e.target.value}))} id="standard-basic" label="Name" variant="standard" name="name" placeholder="Name" />
  <TextField value={elemEdit?.age} onChange={(e)=>setElemEdit((prev)=>({...prev,age:e.target.value}))} id="standard-basic" label="Age" variant="standard" name="age" placeholder="Age" />
  <Button variant="outlined" type="submit">Save</Button>
</form>
</Modal>
     
     
    </div>
  )
}

export default App