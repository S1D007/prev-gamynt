import React , {useState , useEffect , Fragment} from 'react'
import style from "./auth.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../../config/firebase.js"
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Signup = () => {
  useEffect(() => {
    AOS.init();
  }, [])
    // states 
    const [passtype, setpasstype] = useState("password")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [validation, setvalidation] = useState(false)
    const [autherror, setautherror] = useState("")

//  function for validation 

const funcvalidation = () => {
  if (email.length > 0 && password.length > 0) {
    validemail()
  }
  else {
    setautherror("all fields required")
    setvalidation(false)
  }
}
  function validemail() {
    const regemail = /@gmail.com/
      if (email.length >= 11 && regemail.test(email) === true) { 
        setvalidation(true)
      }
      else {
        setautherror("Email not valid , please enter valid Email")
        setvalidation(false)
      }
    }
      // final data in object
      const finaldata = {  email, password}

      useEffect(() => {
        funcvalidation()
      }, [finaldata])

    const handlesubmit = (e)=>{
        e.preventDefault()
        if (validation === true) {
            console.log("fine your data is =>", finaldata)
            setemail(""); setpassword("");setautherror("")
          }
          else{
            toast.error(autherror, {
                autoClose: 2000,
                position: toast.POSITION.TOP_RIGHT,
                className: `${style.toast_message}`
            });
        }
    }
  return (
    <main className={style.main_page}>
             <ToastContainer className={style.toast_container} />
             <main className={style.main_auth}  data-aos="fade-up"
     data-aos-duration="1000">
        <header>
            <Image src={'/logo_mini.png'} alt="img" width={50} height={50}/>
            <p>Login to your Account</p>
        </header>
        <section className={style.login_with}>
            <div>
                <Image src={"/google_icon.svg"} alt="img" width={30} height={30}></Image>
            </div>
        </section>
        <div className={style.or}>
            <hr />or<hr />
        </div>

        <form onSubmit={handlesubmit}>
            <section>
            <MailIcon />
            <input type="text" placeholder='enter your email' value={email}
                onChange={(e) => { setemail(e.target.value) }} />
            </section>
            {/* // password management  */}
            <section className={style.pass_input}>
            <LockIcon />
            <input type={passtype} placeholder='password' value={password}
                onChange={(e) => { setpassword(e.target.value) }} />
                <div onClick={() => { { passtype === "password" ? setpasstype("text") : setpasstype("password") } }}>
                {passtype === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </section>
            {/* // password s  */}

            <button>Log in</button>
        </form>
        <div className={style.change_auth_type}>
            <p>New User? <Link href="/account/signup">Signup</Link></p>
        </div>
    </main>
    </main>
  )
}

export default Signup