import React from 'react'
import Image from "next/image"
import style from "./nav.module.scss"
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GroupsIcon from '@mui/icons-material/Groups';
import ForumIcon from '@mui/icons-material/Forum';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import {useRouter} from "next/router"

const Navbar = () => {
  let router = useRouter()
  let path = router.pathname
  return (
    <main className={style.nav_bottom_fixed}>
      <nav>
        <section className={style.nav_links}>
          <li onClick={()=>{router.push("/")}} className={`${path=="/" && style.active}`}>
            <SportsEsportsIcon />
            home
          </li>
          <li>
            <ForumIcon />
            talk
          </li>
          <li onClick={()=>{router.push("/clubs")}} className={`${path=="/clubs" && style.active}`}>
            <GroupsIcon />
            club
          </li>
          <li onClick={()=>{router.push("/wallet")}} className={`${path=="/wallet" && style.active}`}>
            <MonetizationOnIcon />
            wallet
          </li>
          <li onClick={()=>{router.push("/account")}} className={`${path=="/account" && style.active}`}>
            <img src="/logo.png" alt="img"  />
            profile
          </li>
        </section>
      </nav>
    </main>
  )
}

export default Navbar