import '../styles/globals.css'
import { store } from '../reduxstore/store'
import { Provider } from 'react-redux'
import React,{useEffect} from "react"
import { useRouter } from 'next/router'

// for top loading
import NextNProgress from 'nextjs-progressbar';


function MyApp({ Component, pageProps }) {
  const route = useRouter()
  useEffect(()=>{
    const signup = localStorage.getItem("signup")
    if(!signup){
      route.push("/account/signup")
    }
  })
  
  return (
    <Provider store={store}>
    <main>
    <NextNProgress/>
      <Component {...pageProps} />
    </main>
    </Provider>
  )
}

export default MyApp
