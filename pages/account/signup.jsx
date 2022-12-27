import React , {useState , useEffect , Fragment} from 'react'
import style from "./auth.module.scss"
import Image from 'next/image'
import Link from 'next/link'
// import Avatar from 'react-avatar';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../../config/firebase.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router'
import axios from "axios"
const Signup = () => {
  const provider = new GoogleAuthProvider();
  // states 
  let route = useRouter()
  useEffect(() => {
    AOS.init();
  }, [])
  useEffect(()=>{
    const signup = localStorage.getItem("signup")
    if(signup){
      route.push("/account")
    }
  },[])
// states 
const [passtype, setpasstype] = useState("password")
const [confirmpasstype, setconfirmpasstype] = useState("password")
const [username, setusername] = useState("")
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const [confirmpassword, setconfirmpassword] = useState("")
const [validation, setvalidation] = useState(false)
const [autherror, setautherror] = useState("")
//  function for validation 

const funcvalidation = () => {
    if (username.length > 0 && email.length > 0 && password.length > 0 && confirmpassword.length > 0) {
      validname()
    }
    else {
      setautherror("All fields required")
      setvalidation(false)
    }
  }
  function validname() {
      if (username.length > 3) {
        validemail()
      }
      else {
        setvalidation(false)
        setautherror("Name is to short")
      }
    }
    function validemail() {
      const regemail = /@gmail.com/
        if (email.length >= 11 && regemail.test(email) === true) { 
          validpassword()
        }
        else {
          setautherror("Email not valid , please enter valid email")
          setvalidation(false)
        }
      }
      function validpassword() { 
          if (password === confirmpassword) {
            setvalidation(true)
            setautherror("")
          }
          else{
            setautherror("Password and Confirm password must be same"),
             setvalidation(false)}
        }
        // final data in object
        const finaldata = { username, email, password, confirmpassword }
  
        useEffect(() => {
          funcvalidation()
        }, [finaldata]) 
  
      const handlesubmit = (e)=>{
          e.preventDefault()
          if (validation === true) {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              const url = `https://gamynt-backend-production.up.railway.app/create-user?username=${user.displayName}&email=${user.email}`
              const data = axios.get(url).then((e)=>{
                localStorage.setItem("signup",true)
                  localStorage.setItem("uid",e.data.uid)
                  localStorage.setItem("username",e.data.username)
                  console.log(e)
                route.push("/")
              })
              // ...
            })
              console.log("data  =>", finaldata)
              setusername(""); setemail(""); setpassword("");
              setconfirmpassword("");setautherror("")
            }
            else{
                toast.error(autherror, {
                    autoClose: 2000,
                    position: toast.POSITION.TOP_RIGHT,
                    className: `${style.toast_message}`
                });
            }
      }
      const handleGoogleSignup = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            const {user} = result
            const url = `https://gamynt-backend-production.up.railway.app/create-user?username=${user.displayName}&email=${user.email}`
            const data = axios.get(url).then((e)=>{
              localStorage.setItem("signup",true)
                localStorage.setItem("uid",e.data.uid)
                localStorage.setItem("username",e.data.username)
                console.log(e)
              route.push("/")
            })
          // route.push("/")
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            // const user = result.user;
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
      }

  return (
    <main className={style.main_page}>
             <ToastContainer className={style.toast_container} />
    <main className={style.main_auth}  data-aos="fade-up"
     data-aos-duration="1000">
        <header>
            <img src={'/logo_mini.png'} alt="img" width={50} height={50}/>
            <p>Create a new Account</p>
        </header>
        <section className={style.login_with}>
            <div onClick={handleGoogleSignup} >
                <img src={"/google_icon.svg"} alt="img" width={30} height={30}></img>
            </div>
        </section>
        <div className={style.or}>
            <hr />or <hr />
        </div>

        <form onSubmit={handlesubmit}>
            <section>
            <PersonIcon />
            <input type="text" placeholder='enter your name' value={username}
                onChange={(e) => { setusername(e.target.value)}}/>
            </section>
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
            <section className={style.pass_input}>
            <LockIcon />
            <input type={confirmpasstype} placeholder='confirm password' value={confirmpassword}
                onChange={(e) => { setconfirmpassword(e.target.value) }} />

                <div onClick={() => { { confirmpasstype === "password" ? setconfirmpasstype("text") : setconfirmpasstype("password") } }}>
                {confirmpasstype === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </section>
            {/* // password s  */}

            <button>Sign up</button>
        </form>
        <div className={style.change_auth_type}>
            <p>Already have an account? <Link href="/account/login">Log in</Link></p>
        </div>
    </main>
    </main>
  )
}

export default Signup