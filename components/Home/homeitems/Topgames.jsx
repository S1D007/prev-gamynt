import react from "React"
import Image from "next/image"
import style from "./games.module.scss"

function Topgames(){
    return(
        <main className={style.top_games_main}>
            <header>
            <h1>top featured games</h1>
            </header>
            <section className={style.games_container}>
                <div>
                    <Image src="/logo_mini.png" alt="" width={70} height={70} />
                    <p>team mongo</p>
                </div>
                <div>
                    <Image src="/logo_mini.png" alt="" width={70} height={70} />
                    <p>team mongo</p>
                </div>
                <div>
                    <Image src="/logo_mini.png" alt="" width={70} height={70} />
                    <p>team mongo</p>
                </div>
                <div>
                    <Image src="/logo_mini.png" alt="" width={100} height={100} />
                    <p>team mongo</p>
                </div>

            </section>
        </main>
    )
}
export default Topgames