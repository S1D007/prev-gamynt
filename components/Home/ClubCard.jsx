import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedIcon from '@mui/icons-material/Verified';
import style from "./clubs.module.scss"
import Image from 'next/image';
import { useRouter } from 'next/router';
function ClubCard({name,slogan,uuid,isPaid,clubLogo,clubBanner}) {
  const router = useRouter()
  return (
    <div><section className={style.club_box}>
      <section className={style.bg_img}>
    <img src={clubBanner} alt="img" width={250} height={200} />
      </section>
    <img src={clubLogo} alt="img" width={50} height={50} />
    <div>
        <div className={style.club_name}>
        <h1>{name} </h1>
        {
          isPaid?<abbr title="verified">
        <VerifiedIcon/>
        </abbr>:""
        }
        </div>
        <p>{slogan}</p>
        <div className={style.member_status}>
        <li> <span></span> 250 online</li>
            <li> <span></span> 250 <abbr title="member"><GroupsIcon/></abbr></li>
        </div>
        <button onClick={()=>{
          router.push(`/clubs/${uuid}?pid=0`)
        }} >join</button>
    </div>
</section>
</div>
  )
}

export default ClubCard