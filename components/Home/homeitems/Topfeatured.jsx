import react from "React"
import Image from "next/image"
import style from "./featured.module.scss"

function Topfeatured(){
    return(
        <main className={style.top_featured_main}>
            <header>
            <h1>top featured club</h1>
            </header>
            <section className={style.channerl_container}>
                <div>
                    <Image src="/logo_mini.png" alt="" width={60} height={60} />
                    <p>team mongo</p>
                </div>
                <div>
                    <Image src="/logo_mini.png" alt="" width={60} height={60} />
                    <p>team mongo</p>
                </div>
                <div>
                    <Image src="/logo_mini.png" alt="" width={60} height={60} />
                    <p>team mongo</p>
                </div>

            </section>
        </main>
    )
}
export default Topfeatured