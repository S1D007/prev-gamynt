import React from 'react'
import Image from "next/image"
import Navbar from "../components/Navbar/Navbar"
import style from "../styles/register.module.scss"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LanguageIcon from '@mui/icons-material/Language';
import GroupIcon from '@mui/icons-material/Group';


const Register = () => {
  return (
    <main className={style.home_main}>
        <section className={style.home_section}>
            <div className={style.image_bg}>
        <Image src="/pubg.jpg" alt="img" loading='lazy' height={220} width={230} />
            </div>
            <div className={style.info_container}>
        <Image src="/logo_mini.png" alt="img" loading='lazy' height={120} width={120} />

        <main className={style.info}>
            <p>14th nov , mon 4:30 pm</p>
            <span><EmojiEventsIcon/> 200</span>
        </main>
            </div>
            <section className={style.hoster_promo}>
            <Image src="/logo_mini.png" alt="img" loading='lazy' height={40} width={40} />
            <div className={style.promo_info}
            >
                <h1>Hosted by <b> name is name</b></h1>
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
                <p>50</p>
                <div>
               <GroupIcon/>
               slot
                </div>
            </section>

            <section>
                <p>squad</p>
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
                    <p>$24</p>
                </div>
                <div>
                    <h1>1st rank</h1>
                    <p>$24</p>
                </div>
                <div>
                    <h1>1st rank</h1>
                    <p>$24</p>
                </div>
            </section>

            <Navbar />
    </main>
  )
}

export default Register