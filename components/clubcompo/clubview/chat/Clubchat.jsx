import React, { useEffect, useRef,useState } from 'react'
import Image from "next/image"
import style from "./chat.module.scss"
import clubstyle from  "../clubcommon.module.scss"
import Inputchat from "./Inputchat"
import io from 'socket.io-client'
import { useRouter } from 'next/router'
// import Getmessage from './Getmessage'
// import Sendmessage from './Sendmessage'
import axios from "axios"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
// const Getmessage = dynamic(() => import('./Getmessage'), {
//   suspense: true,
// })
const Sendmessage = dynamic(() => import('./Sendmessage'), {
  suspense: true,
})
const socket = io.connect("gamynt-backend-production.up.railway.app")


// main function
const Clubchat = ({uuid}) => {
  let scrollbottom = useRef(null)
  const router = useRouter()

  const { pid } = router.query
  const [socchats,setsocChats] = useState([])
  const [mochats,setmoChats] = useState([])
  useEffect(()=>{
    socket.on("chats",(payloads)=>{
      setsocChats([...socchats,payloads])
      console.log("chat")
      scrollbottom.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    })
  }, [])

  useEffect((e)=>{
    const url = `https://gamynt-backend-production.up.railway.app/get-chats?uuid=${uuid}&index=${pid}`
    axios.get(url).then((e)=>{
      setmoChats(e.data)
    })
  },[pid])
  const chats = [mochats,socchats].flat(Infinity)
  return (
    <main className={clubstyle.chat_main}>

      <section className={style.chat_container}>
        <header className={style.chat_header}>
          {/* <p>This is Test</p> */}
        </header>
        <Suspense fallback={`Loading...`}>
        {
          chats.map(({avatar,username,date,message})=>{
            return <>
              <Sendmessage logo={avatar} name={username} time={date} message={message} />
            </>
          })
        }
        </Suspense>
      <div ref={scrollbottom}>scroll to bottom div</div>
      </section>
      <Inputchat id={pid} uuid={uuid} />     
    </main>
  )
}

export default Clubchat