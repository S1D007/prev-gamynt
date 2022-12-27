import React from 'react'
import Image from "next/image"
import Navbar from "../../components/Navbar/Navbar"
import style from "./tournamentview.module.scss"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LanguageIcon from '@mui/icons-material/Language';
import GroupIcon from '@mui/icons-material/Group';
const Register = ({data}) => {
    console.log(data)
  return (
    <main className={style.home_main}>
        <section className={style.home_section}>
            <div className={style.image_bg}>
        <img src="/pubg.jpg" alt="img" loading='lazy' height={220} width={230} />
            </div>
            <div className={style.info_container}>
        <img src="/logo_mini.png" alt="img" loading='lazy' height={120} width={120} />

        <main className={style.info}>
            <p>{data.schedule}</p>
            <span><EmojiEventsIcon/> {data.PrizePool}</span>
        </main>
            </div>
            <section className={style.hoster_promo}>
            <img src="/logo_mini.png" alt="img" loading='lazy' height={40} width={40} />
            <div className={style.promo_info}
            >
                <h1>Hosted by <b> Test</b></h1>
                <p>240 members</p>
            </div>
            <button>join</button>
            </section>
            <button className={style.join_btn}>Join tournament</button>

        </section>

{/* info here  */}
        <main className={style.tournament_info}>
            <section>
                <p>india</p>
                <div>
               <LanguageIcon/>
               region 
                </div>
            </section>
            
            <section>
                <p>{data.slot}</p>
                <div>
               <GroupIcon/>
               slot
                </div>
            </section>

            <section>
                <p>{data.mode}</p>
                <div>
               <GroupIcon/>
               team size
                </div>
            </section>
            </main>

            <section className={style.prize_pool}>
                <h1> <EmojiEventsIcon/> prize pool</h1>
                <div>
                    <h1>1st rank</h1>
                    <p>${data.PrizePool /2}</p>
                </div>
                <div>
                    <h1>2st rank</h1>
                    <p>${data.PrizePool / 3}</p>
                </div>
                <div>
                    <h1>3st rank</h1>
                    <p>${data.PrizePool / 4}</p>
                </div>
            </section>

            <Navbar />
    </main>
  )
}

export default Register

export const getServerSideProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch(`https://gamynt-backend-production.up.railway.app/get-tournament?id=${id}`)
    const data = await res.json()
    console.log(data)
    return {
      props: {
        data:data[0]
      }
    }
  }