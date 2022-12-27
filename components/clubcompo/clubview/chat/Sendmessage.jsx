import React from 'react'
import Image from "next/image"
import style from "./chat.module.scss"

const Sendmessage = (props) => {
  return (
    <main className={style.chat_recieve}>
     <div>
      <img src={props.logo} alt="img" loading='lazy' className={style.avatar} />
      <h1>{props.name}</h1>
      <span>{props.time}</span>
      </div>
          <p>{props.message}</p>
      </main>
  )
}

export default Sendmessage