import React, { useState } from 'react'
import Modal from './Button'

function Form() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
        {isOpen &&
        <div>
          
        </div>
        }

        <Modal  />
    </div>
  )
}

export default Form