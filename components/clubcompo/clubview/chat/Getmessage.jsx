import React from 'react'
import Image from "next/image"
import style from "./chat.module.scss"

const Getmessage = (props) => {
  return (
    <main className={style.chat_recieve}>
     <div>
      <Image src={props.logo} alt="img" loading='lazy' height={40} width={40}/>
      <h1>{props.name}</h1>
      <span>{props.time}</span>
      </div>
          <p>{props.message}</p>
      </main>
  )
}

export default Getmessage