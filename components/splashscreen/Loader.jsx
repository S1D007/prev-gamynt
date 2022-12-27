import React , {useState} from 'react'
import style from "./splash.module.scss"
import Image from "next/image"

const Loader = () => {
  const [loadervalue, setloadervalue] = useState(0)
  return (
    <main className={style.main_container_loader}>
            <Image src={"/logo.png"} alt="img" width={180} height={50}/>
            <p>{loadervalue}%</p>
        <input type="range" name="" id="" value={loadervalue} onChange={(e)=>{setloadervalue(e.target.value)}}/>
    </main>
  )
}

export default Loader