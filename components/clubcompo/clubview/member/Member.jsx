import React from 'react'
import style from "./member.module.scss"
import Image from "next/image"

const Member = ({name}) => {
  return (
    <main className={style.single_member}>
        <section className={style.member_image}>
        <img src="/logo_mini.png" alt="img"/>
        <div className={style.status_online}></div>
        </section>
        <section className={style.member_info}>
            <h1>{name} </h1>
            {/* <p> <b>230</b>glory</p> */}
        </section>
    </main>
  )
}

export default Member