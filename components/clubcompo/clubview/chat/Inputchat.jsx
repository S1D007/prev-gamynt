import React, { useState, useEffect } from 'react'
import style from "./input.module.scss"
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import io from 'socket.io-client'
const socket = io.connect("https://gamynt-backend-production.up.railway.app/")

const Inputchat = ({ id, uuid }) => {
  const [sendMessage, setSendMessage] = useState("")
  const [name,setName] = useState("")
  const [uid,setUid] = useState("")
  useEffect(()=>{
    const name = localStorage.getItem("username")
    setName(name)
    const uid = localStorage.getItem("uid")
    setUid(uid)
    console.log(name,uid)
  },[])
  const handleClick = () => {
    const today = new Date();
    socket.emit("club-chat", {
      message: sendMessage,
      username: name,
      date: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
      avatar: "https://media.discordapp.net/attachments/1036217871212216320/1036488069672603668/unknown.png",
      index: id,
      uid,
      uuid: uuid
    })
    setSendMessage("")
  }

  // useEffect(() => {
  //   const keyDownHandler = event => {
  //     if (event.key === 'Enter') {
  //       // event.preventDefault();
  //       // 👇️ your logic here
  //       const today = new Date();
  //       socket.emit("club-chat", {
  //         message: sendMessage,
  //         username: name,
  //         date: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
  //         avatar: "https://media.discordapp.net/attachments/1036217871212216320/1036488069672603668/unknown.png",
  //         index: id,
  //         uid,
  //         uuid: uuid
  //       })
  //       setSendMessage("")
  //     }
  //   };

  //   document.addEventListener('keydown', keyDownHandler);
  //   return () => {
  //     document.removeEventListener('keydown', keyDownHandler);
  //   };
  // });
  return (
    <main className={style.input_container}>
      <section>
        <button><EmojiEmotionsIcon /></button>
        <button><AttachFileIcon /></button>
        <input value={sendMessage} onChange={(e) => setSendMessage(e.target.value)} type="text" placeholder="Message" />
        <button onEnter onClick={handleClick} className={style.send_icon}><SendIcon /></button>
      </section>
    </main>
  )
}

export default Inputchat