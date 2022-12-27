import React from 'react'
import WalletCard from '../../components/wallet/WalletCard'
import Navbar from '../../components/Navbar/Navbar'
import style from "./wallet.module.scss"

const index = () => {
  
  return (
    <main className={style.main_wallet_page}>
        <WalletCard/>
        <Navbar/>
    </main>
  )
}

export default index