import React from 'react'
import style from "./tournamentCard.module.scss"
import Image from "next/image"
import { Avatar, Chip } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
const Post = ({title,slot,banner,prize,mode}) => {
  return (
    <div class={style.card}>
      <div className={style.card_img_holder}>
        <img src={banner} alt="Blog image" />
      </div>
      <section className={style.blog_tittle}>
        <h3>{title}</h3>
        <Chip
          avatar={<Avatar alt="Natacha" src="https://play-lh.googleusercontent.com/Iehzq0fyCTsAMX7_XEUEy8w8RRcgVNmX2UPDVDkqK8ezhl-4qOBOwm7tb7qe7XGYLqQ" />}
          label="Free Fire"
          color='success'
          variant="outlined"
        />
      </section>
      <div class={style.chip} >
        <Chip color='info' label="Squad" />
        <Chip color="error" label="MultiMap" />
        <Chip color="warning" label="TTP" />
      </div>
      <div class={style.options}>
        <div><div className={style.club_logo} ></div><span>legcy club Test</span> </div>
        <p>schedule : 12 aug 12:30 am</p>
        <p>prize : <b>{prize}</b></p>
        <p>slot : <b>{slot}</b></p>
        <p>mode : <b>{mode}</b></p>
        <div className={style.buttons}>
          <button>register</button>
          <ShareIcon />
        </div>
      </div>
    </div>
  )
}

export default Post