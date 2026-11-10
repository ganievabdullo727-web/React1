import { createSlice } from '@reduxjs/toolkit'
export interface IData {
    id:number
    name:string
    job:string
    age:number
}
export interface CounterState {
  value: number
  data:IData[]
}

const initialState: CounterState = {
  value: 100,
  data:[
    {
        id:1,
        name:"Abdullo",
        job:"BOT",
        age:16
    },{
        id:2,
        name:"Muhammad",
        job:"BOT",
        age:16
    },{
        id:3,
        name:"Ormon",
        job:"BOT pro",
        age:20
    }
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   deleteUser:(state,{payload:id})=>{
    state.data = state.data.filter((e)=>e.id!=id)
   },
   addUser:(state,{payload:newUser})=>{
    state.data = [...state.data,newUser]
   },
   editUser:(state,{payload:newUser})=>{
    state.data = state.data.map((e)=>e.id==newUser.id?newUser:e)
   }
  }
})

export const { deleteUser,addUser,editUser} = counterSlice.actions


export default counterSlice.reducer