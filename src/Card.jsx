import React from 'react'

const Card = ({textH, textP, className = ''  }) => {
  return (
<div className={`${className} flex flex-col items-center p-[20px] rounded-[20px] border border-[#DFCCB7] w-[90%] m-auto xl:w-[220px]`}>
        <h1 className='text-[#493E3E] text-center  lg:{block} font-medium text-[25px]'>{textH}</h1>
        <p className='text-[#493E3E] text-center  font-medium'>{textP}</p>
    </div>
  )

}

export default Card