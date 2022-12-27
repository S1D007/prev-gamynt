import React,{ useEffect, useState } from 'react'
import Image from "next/image"
import LogoutIcon from '@mui/icons-material/Logout';
import style from "./profile.module.scss"
import Navbar from '../../components/Navbar/Navbar';
import GroupsIcon from '@mui/icons-material/Groups';
// import { useState } from 'react';

const Index = () => {
  const [name,setName] = useState("")
  useEffect(()=>{
    const name = localStorage.getItem("username")
    setName(name)
  },[])
  return (
    <main className={style.main_profile_page}>
      <section className={style.profile_top_view}>
        <div className={style.image_container}>
        <img src="/logo_mini.png" alt="img" width={20} height={20}/>
        </div>
        <div className={style.name_bio}>
        <h1>{name}</h1>
        <p>Made with Irony</p>
        </div>
      </section>

      <section className={style.team_container}>
        <div className={style.no_team}>
          <h1>My team</h1>
          <GroupsIcon/>
          <h1>No team member found</h1>
          <button>Add player</button>
        </div>
        <section className={style.team_exist}>
        {/* <h1><GroupsIcon/> my team</h1> */}

        {/* <div className={style.team_box}>
        <img src="/logo_mini.png" alt="img" width={20} height={20}/>
        <p>team 1 name</p>
        </div>
        <div className={style.team_box}>
        <img src="/logo_mini.png" alt="img" width={20} height={20}/>
        <p>team 1 name</p>
        </div> */}
        </section>
      </section>

      <section className={style.logout}>
        <button> <p>Log out</p><LogoutIcon/></button>
      </section>
      <Navbar/>
    </main>
  )
}

export default Index