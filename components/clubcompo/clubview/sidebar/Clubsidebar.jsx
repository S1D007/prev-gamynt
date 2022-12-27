import React,{useState,useEffect , Fragment} from 'react'
import Image from "next/image"
import clubstyle from "../clubcommon.module.scss"
import style from "./sidebar.module.scss"
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import axios from "axios"
import { useRouter } from 'next/router'
import Clubsidenav from '../../clubnavs/Clubsidenav';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const Clubsidebar = ({ clubName, clubLogo, clubBanner,id }) => {
  // console.log(channels)
  const [channel,setChannel] = useState("")
  const [channelsList,setChannelsList] = useState([])
  useEffect(()=>{
    const url = `https://gamynt-backend-production.up.railway.app/get-channels?&id=${id}`
    axios.get(url).then((e)=>{
      setChannelsList(e.data)
    })
  },[channel])
  const handleCreateChannel = ()=>{
    const url = `https://gamynt-backend-production.up.railway.app/create-channel?name=${channel}&id=${id}`
    axios.get(url).then((e)=>{
      // console.log(e)
    })
    // const data = fetch(url).then((e)=>{
    //   console.log(e)
    // }).then((e)=>{
    //   console.log(e)
    // })
  }
  const router = useRouter()
  return (
    <Fragment>
      <div className={clubstyle.side_nav_mob}>
      <Clubsidenav/>
      </div>
    <main className={clubstyle.sidenav_main}>
      <section className={style.team_logo}>
        <img src={clubBanner} className={style.backImg} />
        <img src={clubLogo} className={style.logo} alt="img" height={20} width={20} />
        <h1>{clubName}</h1>
      </section>
      <section className={style.adspace}>
        Advertisments
      </section>
      <section className={style.more_container}>
        <div className={style.invite_div}>
          <PersonAddIcon/>invite
        </div>
      </section>
      <section className={style.channel_container}>
        <div className={style.add} style={{
          marginBottom:"5px",
          display:"flex",
          justifyContent:"flex-end"
        }} >
        <input value={channel} onChange={(e)=>{
          setChannel(e.target.value)
        }} type="text" />
          <AddIcon onClick={handleCreateChannel} />
        </div>
          {
            channelsList.map(({ name }, i) => {
              return <>
        <section  onClick={()=>{
                  router.push(`/clubs/${id}?pid=${i}`)
                }} className={`${style.single_chanel} `}>
                <WorkspacesIcon />
                <p >{name}</p>
        </section>
              </>
            })
          }
      </section>

      <section className={style.bottom_items}>
        <p>
          chat
        </p>
        <MicIcon />
        <SettingsIcon />
      </section>
    </main>
    </Fragment>
  )
}

export default Clubsidebar