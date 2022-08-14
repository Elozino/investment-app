import React from 'react'
import AccountCard from '../AccountCard/AccountCard'
import { TiWarning} from 'react-icons/ti'

const Account = () => {
  return (
    <div>
      <AccountCard
        icon={<TiWarning color="#F4BD0E" />}
        color="#fff"
        bg="#F4BD0E"
        title="You have not added any withdraw account yet in your account."
        BtnTitle="Add account"
      />
    </div>
  )
}

export default Account