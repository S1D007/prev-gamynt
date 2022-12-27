import React from 'react'
import style from "./ads.module.scss"

import Image from "next/image"
function Ads({src}) {
  return (
    <div className={style.container} >
    <h1>Advertisement</h1>
        <Image src={src} alt={src} />
    </div>
  )
}

export default Ads
