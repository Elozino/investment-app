import React from 'react'
import Button from '../../Button/Button'
import "./AccountCard.css"

const AccountCard = ({ title, BtnTitle, icon, color, bg, func }) => {
  return (
    <div className='AccountCard' style={{ border: `1px solid ${bg === "transparent" ? "#037dff" : bg}`, background: "#fff", }}>
      <div className='AccountCard__title'>
        {icon}
        <p>{title}</p>
      </div>
      <div>
        <button
          onClick={func}
          className='AccountCard__btn' style={{ color: color, background: bg }}>{BtnTitle}
        </button>
      </div>
    </div>
  )
}

export default AccountCard