import React from 'react'
import Explore from './Explore'
import style from "./homecompo.module.scss"
import Post from './TournamentCard'
import style2 from "./tournamentCard.module.scss"

const Posthome = () => {
  return (
    <main className={style.post_main}>
      <section className={style.post_container}>
      <Explore/>
      <h1>Recomemded Tournaments</h1>
      <section className={style2.post_container}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </section>
      </section>
    </main>
  )
}

export default Posthome