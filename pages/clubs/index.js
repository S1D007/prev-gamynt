import React from 'react'
import style from "../../components/Home/clubs.module.scss"
import Image from "next/image"
import Navbar from '../../components/Navbar/Navbar'
import ClubCard from '../../components/Home/ClubCard'
import { useRouter } from 'next/router'
const index = ({clubs}) => {
  return (
    <main>
        <main className={style.clubs_container}>
        {clubs.map((e)=>{
            return <div key={e.clubID} >
            <ClubCard clubLogo={e.clubLogo} clubBanner={e.clubBanner} isPaid={e.isPaid}  name={e.clubName} slogan={e.description} uuid={e.clubID} />
            </div>
        })}
        <Navbar />
           </main>
        
    </main>
  )
}

export default index

export async function getStaticProps(context) {
    const res = await fetch('https://gamynt-backend-production.up.railway.app/all-clubs')
    // console.log(res)
    const clubs = await res.json()
    // console.log(clubs)
    return {
      props: {
        clubs
      }, // will be passed to the page component as props
      revalidate: 10
    }
  }