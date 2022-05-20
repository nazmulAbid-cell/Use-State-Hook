import React from 'react'

function Backdrop({onCancle}) {
  return (
    <div className='backdrop' onClick={onCancle}/>
  )
}

export default Backdrop