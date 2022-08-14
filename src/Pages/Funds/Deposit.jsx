import React, { useState } from 'react'
import "./Deposit.css"
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Deposit = () => {
  const [copied, setCopied] = useState(false);

  function copy() {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 200)
  }
  return (
    <div className='container'>
      <div>
        <h2>Deposit Wallet</h2>
        <p>Deposit funds to the btc wallet</p>
      </div>
      <div className='clipboard'>
        <p>cryptoassetdotcom</p>
        <CopyToClipboard text="My Crypto wallet" onCopy={copy}>
          <button >Copy</button>
        </CopyToClipboard>
        {copied ? <span className='float'>Copied!</span> : null}
      </div>
    </div>
  )
}

export default Deposit