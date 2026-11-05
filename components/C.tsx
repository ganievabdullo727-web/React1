import React, { useContext, useState } from 'react'
import { cntContext } from '../src/App'

const C = () => {
  let cnt = useContext(cntContext)
  return (
    <div>
      {cnt}
    </div>
  )
}

export default C