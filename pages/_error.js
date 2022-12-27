import react from "react"
import Navbar from '../components/Navbar/Navbar'
import style from "../styles/error.module.scss"
import {useRouter }from "next/router"

function _error(){
    let router = useRouter();
    console.log(router)

    return(
        <main className={style.error_main}>
            <section className={style.error_container}>
                <h1>404</h1>
                <p>page not found</p> 
                <small>may be you follow broken url or server issue</small>
                <button onClick={()=>{router.back()}}>back</button>
           </section>
           <Navbar />
        </main>
    )
}

export default _error