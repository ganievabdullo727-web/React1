import React from 'react'

const CardFood = ({type , type2, h2, img, className = ''}) => {
  return (
 <div className={`${className} font-medium shadow-md rounded-[10px] flex flex-col gap-[10px] p-[10px] w-[300px] m-auto xl:m-[0]`}>
   <img src={img} alt="" />
<div className='text-[#A98C64] flex gap-[50px]'>
     <p >{type}</p>
     <p>{type2}</p>
</div>  
 <h2 className='font-medium text-[#493E3E]'>{h2}</h2>
 </div>
  )
}

export default CardFood