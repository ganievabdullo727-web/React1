import { AppStore } from '@/app/store'
import { addUser, deleteUser, editUser } from '@/store/counterSlice'
import { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'

const Home = () => {
 const {data} = useSelector((store:AppStore)=>store.counter)
const dispatch  = useDispatch()
const [elem,setElem] = useState({id:null,name:"",age:null,job:""})
const handleSubmit =(event)=>{
  event.preventDefault()
  const newUser={
    id:elem.id?elem.id:Date.now(),
    name:event.target.name.value,
    age:event.target.age.value,
    job:event.target.job.value,
  }
  elem.id? dispatch(editUser(newUser)):  dispatch(addUser(newUser))
  event.target.reset()
  setElem({id:null,name:"",age:null,job:""})
}

const handleEdit =(e)=>{
  setElem(e)

}
  return (
    <div>
<form onSubmit={handleSubmit} action="">
  <input className='border rounded-2xl p-[5px]' placeholder='name' defaultValue={elem.name} name='name' type="text" />
  <input className='border rounded-2xl p-[5px]' placeholder='age' defaultValue={elem.age} name='age' type="number" />
  <input className='border rounded-2xl p-[5px]' placeholder='job' defaultValue={elem.job} name='job' type="text" />
  <button type='submit'>{elem.id?"save":"submit"}</button>
</form>


<div>
  {
    data.map((e)=>{
      return <div className='flex gap-3 '>
        <h1>{e.name} :</h1>
        <p>{e.age} :</p>
        <p>{e.job} :</p>
        <button className='text-[red]' onClick={()=>dispatch(deleteUser(e.id))}>delete</button>
        <button className='text-[blue]' onClick={()=>handleEdit(e)}>edit</button>
      </div>
    })
  }
</div>
    </div>
  )
}

export default Home