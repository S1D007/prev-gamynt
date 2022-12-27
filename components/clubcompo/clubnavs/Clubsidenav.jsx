import React from 'react'
import style from "./clubsidenav.module.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import Image from "next/image"

const Clubsidenav = () => {
  let router = useRouter()
  return (
    <main className={style.nav_main}>
      <div onClick={() => { router.push("/clubs") }} className={style.back_btn}><ArrowBackIcon /> <p>back</p></div>
      <section className={style.channel_container}>

        <div className={style.channel_box}>
          <Image src="/logo_mini.png" alt="" width={50} height={50}/>
          <p>channel name</p>
        </div>
        <div className={style.channel_box}>
          <Image src="/logo_mini.png" alt="" width={50} height={50}/>
          <p>channel name</p>
        </div>
      </section>
    </main>
  )
}

export default Clubsidenav