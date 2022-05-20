import React from 'react'

function Modal({onCancle}) {
  return (
    <div className='modal'>
        <p>Are you sure ?</p>
        <button className='btn btn--alt' onClick= {onCancle} >Cancle</button>
        <button className='btn' onClick= {onCancle}>Confirm</button>
    </div>
  )
}

export default Modal