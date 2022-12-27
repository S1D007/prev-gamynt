import React from 'react'
import style from "./loader.module.scss"

const Loader = () => {
  return (
    <main className={style.main_container}>
<div className={style.loader}>
<div id="first">
        <div id="second">
            <div id="third">
            </div>
        </div>
    </div>
</div>
    </main>
  )
}

export default Loader