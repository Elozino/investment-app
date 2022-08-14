import React from 'react'
import Button from '../../Button/Button'
import "./Modal.css"

const Modal = ({ setModal }) => {
  return (
    <div className='Modal__container'>
      <div className='Modal__Wrapper'>
        <h3>Profile Update</h3>
        <p onClick={() => setModal(false)}>X</p>
        <form action="" className='Modal__form'>
          <div className='Modal_formFlex'>
            <div>
              <div className='Modal__formField'>
                <label htmlFor="">Fullname</label><br />
                <input type="text" placeholder='John Doe' />
              </div>
              <div className='Modal__formField'>
                <label htmlFor="">Username</label><br />
                <input type="text" placeholder='Username' />
              </div>
              <div className='Modal__formField'>
                <label htmlFor="">Email</label><br />
                <input type="email" placeholder='example@email.com' />
              </div>
              <div className='Modal__formField'>
                <label htmlFor="">Phone Number</label><br />
                <input type="text" placeholder='Phone Number' />
              </div>
              <div className='Modal__formField'>
                <label htmlFor="">Gender</label><br />
                <input type="text" placeholder='Gender' />
              </div>
            </div>
            <div>
              <div className='Modal__formField'>
                <label htmlFor="">Telegram</label><br />
                <input type="text" placeholder='@username' />
              </div>
              <div className='Modal__formField'>
                <label htmlFor="">Date of Birth</label><br />
                <input type="date" placeholder='Date of Birth' />
              </div>
              <div className='Modal__formField'>
                <label htmlFor="">Country</label><br />
                <input type="text" placeholder='Country' />
              </div>
              <div className='Modal__formField'>
                <label htmlFor="">Address</label><br />
                <input type="text" placeholder='Address' />
              </div>
            </div>
          </div>
          <button className='Modal__btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Modal