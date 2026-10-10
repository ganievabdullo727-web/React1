import React from 'react'

  const CardCooker = ({h1, p, img}) => {
    return (
      <div className='w-[420px] p-[10px] rounded-[20px] shadow-md   flex flex-col gap-[10px]'>
    <img className='m-auto xl:m-0 w-[60px]' src={img} alt="" />
    <h1 className= 'text-[#493E3E] text-center xl:text-left font-medium xl:text-[20px]' >{h1}</h1>
    <p className='text-[#493E3E] text-center xl:text-left '>{p}</p>
      </div>
    )
  }

  export default CardCooker