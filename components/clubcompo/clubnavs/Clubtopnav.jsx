import React, { useState } from 'react'
import style from "./clubnav.module.scss"
import GroupIcon from '@mui/icons-material/Group';
import MenuIcon from '@mui/icons-material/Menu';

import { useDispatch } from 'react-redux';
import {clubside , memberside} from "../../../reduxstore/mobchat"

const Clubtopnav = (props) => {
  let dispatch = useDispatch()
  const [pagestate, setpagestate] = new useState(0)

  return (
    <main className={style.top_nav}>
     <nav>
      <section>
        <MenuIcon onClick={()=>{dispatch(clubside())}} />
      </section>
      
      <section>
      <GroupIcon onClick={()=>{dispatch(memberside())}} />
      </section>
     </nav>
    </main>
  )
}

export default Clubtopnav