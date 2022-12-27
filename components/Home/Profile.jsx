import React from 'react'
import style from "./profile.module.scss"
import Image from "next/image"
import { Avatar, Chip } from '@mui/material'

const Profile = () => {
  return (
    <main>
      <section className={style.profile_box}>
      <div class={style.card}>
  <div class={style.banner}>
    <svg viewBox="0 0 100 100">
      <path d="m38.977 59.074c0 2.75-4.125 2.75-4.125 0s4.125-2.75 4.125 0"></path>
      <path d="m60.477 59.074c0 2.75-4.125 2.75-4.125 0s4.125-2.75 4.125 0"></path>
      <path d="m48.203 69.309c1.7344 0 3.1484-1.4141 3.1484-3.1484 0-0.27734-0.22266-0.5-0.5-0.5-0.27734 0-0.5 0.22266-0.5 0.5 0 1.1836-0.96484 2.1484-2.1484 2.1484s-2.1484-0.96484-2.1484-2.1484c0-0.27734-0.22266-0.5-0.5-0.5-0.27734 0-0.5 0.22266-0.5 0.5 0 1.7344 1.4141 3.1484 3.1484 3.1484z"></path>
    </svg>
  </div>
  <div class={style.menu}>
    <div class={style.opener}><span></span><span></span><span></span></div>
  </div>
  <h2 class={style.name}>Siddhant</h2>
  <div className={style.games} >
  <h2>Games</h2>
  <Chip
  avatar={<Avatar alt="Natacha" src="https://play-lh.googleusercontent.com/Iehzq0fyCTsAMX7_XEUEy8w8RRcgVNmX2UPDVDkqK8ezhl-4qOBOwm7tb7qe7XGYLqQ" />}
  label="Free Fire" 
  color='success'
  variant="outlined"
/>
  <Chip
  avatar={<Avatar alt="Natacha" src="https://images.ctfassets.net/vfkpgemp7ek3/1240004181/8b1fdb1ab8330de77e0f8ecf1f5757c1/call-of-duty-mobile-hero-a.jpg" />}
  label="Call of Duty" 
  color='success'
  variant="outlined"
/>
  <Chip
  avatar={<Avatar alt="Natacha" src="https://www.firstpost.com/wp-content/uploads/2022/07/Explained-Why-Google-and-Apple-removed-BGMI-from-their-respective-app-stores-2-years-after-PUBG-ban-2.jpg" />}
  label="BGMI" 
  color='success'
  variant="outlined"
/>
  </div>
  <button className={style.view_profile} >View Full Profile</button>
</div>
      </section>
    </main>
  )
}

export default Profile