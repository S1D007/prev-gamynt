import React, { useEffect, useState } from 'react'
import Clubchat from '../../components/clubcompo/clubview/chat/Clubchat'
import Clubmember from '../../components/clubcompo/clubview/member/Clubmember'
import Clubsidebar from '../../components/clubcompo/clubview/sidebar/Clubsidebar'
import Clubsidenav from "../../components/clubcompo/clubnavs/Clubsidenav"
import Clubtopnav from "../../components/clubcompo/clubnavs/Clubtopnav"
import style from "./test.module.scss"
import { useSelector } from 'react-redux'

const test = ({clubData}) => {
  let navdata = new useSelector((state)=> state.chatnav)
  const [clubside, setclubside] = new useState(0)
  const [memberside, setmemberside] = new useState(0)
  new useEffect(() => {
    {navdata.includes("openside") ? setclubside(1) : setclubside(0)}
    {navdata.includes("openmember") ? setmemberside(1) : setmemberside(0)}

  }, [navdata])
  


  return (
    <main className={style.main_test_page}>
    <div className={style.ui_1}></div>
    <div className={style.ui_2}></div>

    <section className={style.mob_view}>
      <Clubtopnav />
    <div className={style.render_body}>

      <div className={`${style.render_body_div} ${clubside === 1 && style.render_body_active}`}>
      <Clubsidebar id={clubData.clubID} clubBanner={clubData.clubBanner} clubName={clubData.clubName} clubLogo={clubData.clubLogo}  />
      </div>

      <div className={`${style.render_body_div_right} ${memberside === 1 && style.render_body_right_active}`}>
     <Clubmember membersList={clubData.membersList} />
      </div>

      <Clubchat uuid={clubData.clubID} />
    {/* <Clubsidebar id={clubData.clubID} clubBanner={clubData.clubBanner} clubName={clubData.clubName} clubLogo={clubData.clubLogo}  /> */}
    {/* <Clubchat uuid={clubData.clubID} /> */}
    {/* <Clubmember membersList={clubData.membersList} /> */}
    </div>
    </section>

    <section className={style.pc_view}>
    <Clubsidenav/>
      <Clubsidebar id={clubData.clubID} clubBanner={clubData.clubBanner} clubName={clubData.clubName} clubLogo={clubData.clubLogo}  />
      <Clubchat uuid={clubData.clubID} />
      <Clubmember membersList={clubData.membersList} />
    </section>
    <div className={style.ui_3}></div>
    </main>
  )
}

export default test

export const getServerSideProps = async (context) =>{
  const uuid = context.params.uuid;
  const res = await fetch(`https://gamynt-backend-production.up.railway.app/club-uuid?uuid=${uuid}`)
  // console.log(res)
  const clubData = await res.json()
  return {
    props: {
      clubData:clubData[0]
    }
  }
}