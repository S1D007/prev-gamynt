import Image from 'next/image'
import React from 'react'
import style from "./homecompo.module.scss"
import Profile from './Profile'



const Profilehome = () => {
  return (
    <main className={style.profile_main}>
    <Profile />
    <main>
      <section className={style.my_club_box}>
      <Image src="/logo_mini.png" alt="img" width={50} height={50}/>
      <p>club name</p>
      </section>
      <section className={style.my_club_box}>
      <Image src="/logo_mini.png" alt="img" width={50} height={50}/>
      <p>club name</p>
      </section>
      <section className={style.my_club_box}>
      <Image src="/logo_mini.png" alt="img" width={50} height={50}/>
      <p>club name</p>
      </section>
    </main>
      </main>
  )
}

export default Profilehome