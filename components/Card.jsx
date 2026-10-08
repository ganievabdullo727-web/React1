import React from 'react'

const Card = (props) => {
  const{name,img} = props
  return (
    <div className='card'>
      <span>{name}</span>
      <img src="{img}" alt="" />
    </div>
  )
}

export default Card
