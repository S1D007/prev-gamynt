import React from 'react'
import style from "./splash.module.scss"
import Image from "next/image"
import { useRouter } from 'next/router'

const Getstart = () => {
  let router = useRouter()

  return (
    <main className={style.scrolldiv_main}>
      <div className={style.logo_scrolldiv}>
      <Image src={"/logo.png"} alt="img" width={180} height={50}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corporis repudiandae illo id in ea? Aliquid quidem voluptatem odio ex aspernatur? Tempore voluptate quis quae dolorem accusamus? Sint, in ratione?</p>
      </div>
      <section className={style.scroll_container}>
        {/* <button className={`${style.prev_btn}`}>prev</button> */}
        <Image style={style.loader_img} src={"/favicon.ico"} alt="img" width={100} height={100} />
        <Image style={style.loader_img} src={"/favicon.ico"} alt="img" width={100} height={100} />
        <Image style={style.loader_img} src={"/favicon.ico"} alt="img" width={100} height={100} />
        <Image style={style.loader_img} src={"/favicon.ico"} alt="img" width={100} height={100} />
        <Image style={style.loader_img} src={"/favicon.ico"} alt="img" width={100} height={100} />
        {/* <button className={`${style.next_btn}`}>next</button> */}
      </section>
      <button className={style.signup_btn} onClick={()=>router.push("/account/signup")}>sign up</button>
    </main>
  )
}

export default Getstart