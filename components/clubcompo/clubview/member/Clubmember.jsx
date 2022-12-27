import React from 'react'
import style from "./member.module.scss"
import clubstyle from  "../clubcommon.module.scss"
import Member from './Member'

const Clubmember = ({membersList}) => {
  return (
    <main className={clubstyle.member_main}>
      <section className={style.member_container}>
        {
          membersList.map(({username})=>{
            return <>
              <Member name={username} />
            </> 
          })
        }
      </section>
    </main>
  )
}

export default Clubmember