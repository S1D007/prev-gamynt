import React from 'react'
import Image from "next/image"
import style from "./explore.module.scss"
function Explore() {
  return (
    <main className={style.main} >
        <section  className={style.container}>
          <div className={style.image_with_text}>
            <Image src="/pubg.jpg" alt="img" width={280} height={20}/>
        <p>pub g is here</p>
          </div>
          <div className={style.image_with_text}>
            <Image src="/pubg.jpg" alt="img" width={280} height={20}/>
        <p>free fire is here</p>
          </div>
          <div className={style.image_with_text}>
            <Image src="/pubg.jpg" alt="img" width={280} height={20}/>
        <p>fortnite is here</p>
          </div>
        </section>
    </main>
  )
}

export default Explore