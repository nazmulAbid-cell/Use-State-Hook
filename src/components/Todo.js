import React, { useState } from 'react'
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo({title}) {
const [showModal,setShowModal] =useState(false)
function delteHandler(){
  setShowModal(true)
    }
function  cancleShowModal(){
  setShowModal(false)
}
  return (
    <div>
    <div className='card'>
    <h2>{title}</h2>
    </div>
    <div className='actions'>
      <button className='btn' onClick= {delteHandler}>Delete</button>
    </div>
    {showModal ? <Modal onCancle={cancleShowModal} /> : null}
   {showModal ? <Backdrop onCancle={cancleShowModal}/> : null}
  </div>
  )
}

export default Todo