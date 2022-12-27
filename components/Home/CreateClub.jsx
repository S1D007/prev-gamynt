import React, { useState } from 'react'
import style from "./createclub.module.scss"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from "axios"
import { useRouter } from 'next/router'
const CreateTournament = () => {
    const [clubName, setClubName] = useState("")
    const [logo, setLogo] = useState(null)
    // const [mode, setBanner] = useState("")
    const [description, setDescription] = useState("")
    const [banner, setBanner] = useState(null)
    const router = useRouter()
    // console.log(file)
    const handleCreate = (event) => {
        event.preventDefault()
        const url = 'https://gamynt-backend-production.up.railway.app/create-club';
        const formData = new FormData();
        formData.append('clubOwner', "Siddhant");
        formData.append('clubLogo', logo)
        formData.append('clubName', clubName)
        formData.append('clubBanner', banner)
        formData.append('description', description)
        console.log(formData)
        axios.post(url, formData).then((response) => {
            console.log(response.data);
        }).then(() => {
            router.push("/clubs")
        })
    }
    console.log(banner)

    return (
        <div className={style.container} >
            <div className={style.clubContainer} >
                <div className={style.form} >
                    <div>
                    </div>
                    <div className={style.avatar_container} >
                        <div className={style.avatar} >
                            {
                                logo ? <img src={logo} alt="" srcset="" /> : <div>
                                    <FileUploadIcon />
                                    <input onChange={(e) => {
                                        const url = 'https://gamynt-backend-production.up.railway.app/upload';
                                        const formData = new FormData();
                                        formData.append('img', e.target.files[0]);
                                        axios.post(url, formData).then((response) => {
                                            // setCreated(true);
                                            setLogo(response.data.result)
                                        });
                                    }} type="file" accept='image/*' id="imagebanner" />
                                </div>
                            }
                        </div>
                    </div>

                    <div class="flex justify-center my-2 items-center w-full">
                        {
                            banner ? <img className={style.banner} src={banner} alt="" /> : <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-44 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload Banner</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input onChange={(e) => {
                                    const url = 'https://gamynt-backend-production.up.railway.app/upload';
                                    const formData = new FormData();
                                    formData.append('img', e.target.files[0]);
                                    console.log(e.target.files[0])
                                    axios.post(url, formData).then((response) => {
                                        // setCreated(true);
                                        setBanner(response.data.result)
                                    });
                                }} id="dropzone-file" accept='image/*' type="file" class="hidden" />
                            </label>
                        }
                    </div>

                    <div>
                        <input type="text" value={clubName} onChange={(e)=>{
                            setClubName(e.target.value)
                        }} id="first_name" class="bg-[#181924] my-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Club Name" required />
                    </div>
                    <textarea onChange={(e)=>{
                        setDescription(e.target.value)
                    }} rows={10} cols={10} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required />
                </div>
                <div className={style.btn} >
                    <button onClick={handleCreate} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Create Club</button>
                </div>
            </div>

        </div>
    )
}

export default CreateTournament