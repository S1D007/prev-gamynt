import React , {useEffect , Fragment} from 'react'
import Head from 'next/head'
import style from "../styles/Home.module.scss"
import ProfileSideBar from '../components/Home/ProfileSideBar'
import Navbar from '../components/Navbar/Navbar'
import Mobnav from '../components/Navbar/Mobnav'
import Explore from '../components/Home/Explore'
import style_ from "../components/Home/homecompo.module.scss"
import Post from '../components/Home/TournamentCard'
import style2 from "../components/Home/tournamentCard.module.scss"
import Topfeatured from '../components/Home/homeitems/Topfeatured'
import Topgames from '../components/Home/homeitems/Topgames'


// import Navbar from '../components/Navbar/Navbar'

export default function Home({tournaments}) {

  console.log(tournaments)
  return (
    <Fragment>
      {/* <Loader/> */}
      {/* <Getstart /> */}
      <main className={style.main_home}>
        <Mobnav/>
        <ProfileSideBar/>
        <main className={style_.post_main}>
      <section className={style_.post_container}>
      <Explore/>

      
    {/* top featured */}

    <Topfeatured />
    <Topgames />


      <h1 className="text-3xl mx-2" >Recomemded Tournaments</h1>
      <section className={style2.post_container}>
      {
        tournaments.map(({bannerImgUrl,mode,title,PrizePool,slot},i)=>{
          return <div key={i} >
          <Post banner={bannerImgUrl} mode={mode} title={title} prize={PrizePool} slot={slot} />
          </div>
        })
      }
      </section>
      </section>
    </main>
        <Navbar/>
      </main>
    </Fragment>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('https://gamynt-backend-production.up.railway.app/all-tournament')
  // console.log(res)
  const tournaments = await res.json()

  return {
    props: {
      tournaments
    }, // will be passed to the page component as props
    revalidate: 10
  }
}