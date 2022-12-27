import React from 'react'
import style from "./wallet_1.module.scss"

const WalletCard = () => {
  return (
    <main className={style.wallet_card_box}>
    <nav>
        <section className={style.box_container}>
        <div className={style.ui_box_1}></div>
        <div className={style.ui_box_2}></div>
        <div className={style.ui_box_3}></div>
        </section>

        <h1>gymnt wallet</h1>
    </nav>

<section className={style.balance}>
    <h1>balance</h1>
    <p>$12</p>
</section>
<button className={style.withdraw_btn}>withdraw money</button>
</main>
  )
}

export default WalletCard