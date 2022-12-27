import React from 'react'
import style from "./nav.module.scss"
import Image from "next/image"
import NotificationsIcon from '@mui/icons-material/Notifications';

const Mobnav = () => {
  return (
    <main className={style.mobilenav}>
      <img src="/logo.png" alt="img" />
        <section>
            <div className={style.notification}>
            <NotificationsIcon/>
            <p>12</p>
            </div>
        </section>
    </main>
  )
}

export default Mobnav