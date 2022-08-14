import React, { useContext, useState } from 'react';
import { IoIosAlert, IoIosArrowForward } from 'react-icons/io';
import { StateContext } from '../../../context/context';
import AccountCard from '../AccountCard/AccountCard';
import Modal from './Modal';

const ProfileDetails = () => {
  const { userName, email } = useContext(StateContext)
  const [modal, setModal] = useState(false)

  return <>
    <section>
      <AccountCard
        icon={<IoIosAlert color="#037DFF" />}
        bg="transparent"
        color="#037DFF"
        title="Update your account information from your profile to complete account setup."
        BtnTitle="Update Profile"
        func={() => setModal(true)}
      />
    </section>
    <section className='Profile__info'>
      <h4>Personal Information</h4>
      <small>Basic info, like your name and address, that you use on our platform.</small>
      <div className='Profile__details'>
        <div className="Profile__row">
          <p>Full Name</p>
          <div>
            <p>{userName}</p>
            <span><IoIosArrowForward /></span>
          </div>
        </div>
        <div className="Profile__row">
          <p>Display Name</p>
          <div>
            <p>{userName}</p>
            <span><IoIosArrowForward /></span>
          </div>
        </div>
        <div className="Profile__row">
          <p>Email</p>
          <div>
            <p>{email}</p>
            <span><IoIosArrowForward /></span>
          </div>
        </div>
        <div className="Profile__row">
          <p>Phone Number</p>
          <div>
            <p>Not added yet</p>
            <span><IoIosArrowForward /></span>
          </div>
        </div>
        <div className="Profile__row">
          <p>Telegram</p>
          <div>
            <p>Not added yet</p>
            <span><IoIosArrowForward /></span>
          </div>
        </div>
        <div className="Profile__row">
          <p>Gender</p>
          <div>
            <p>Not added yet</p>
            <span><IoIosArrowForward /></span>
          </div>
        </div>
        <div className="Profile__row">
          <p>Date of Birth</p>
          <div>
            <p>Not added yet</p>
            <span><IoIosArrowForward /></span>
          </div>
        </div>
        <div className="Profile__row">
          <p>Country</p>
          <div>
            <p>Not added yet</p>
            <span><IoIosArrowForward /></span>
          </div>
        </div>
        <div className="Profile__row">
          <p>Address</p>
          <div>
            <p>Not added yet</p>
            <span><IoIosArrowForward /></span>
          </div>
        </div>
      </div>
    </section>
    {modal && <Modal setModal={setModal}/>}
  </>
}

export default ProfileDetails