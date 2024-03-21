import React, { useEffect, useState } from 'react'
import '../profile/profile.css'
import { useNavigate } from 'react-router-dom'
import { deleteUser, updateUser, verifyUser } from '../../api/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditProfile() {

    const [input,setInput] = useState({
        name:"",
        password:""
    })


    const navigate = useNavigate()

    const logout = ()=>{
        localStorage.removeItem("token")
        navigate('/')
    }

    const update = async()=>{

        const token = localStorage.getItem('token')

        const headers = {
            "x-access-token":token
        }

        const result = await updateUser(input,headers)
        
        if(result.status=='200'){
            toast.info("Profile updated")
        }
    }

    const deleteAcc = async()=>{
        const token = localStorage.getItem('token')

        const headers = {
            "x-access-token":token
        }

        const result = await deleteUser(headers)
        
        if(result.status=='200'){
            localStorage.removeItem('token')
            navigate('/')
        }
    }

    /* Verify User */

    const checkUser = async()=>{
        let token = localStorage.getItem("token")
        const headers = {
            "x-access-token":token
        }
        const result = await verifyUser(headers)

        if(result.status){
            if(result.status!='200'){
                localStorage.removeItem('token')
                alert("UnAuthorized Access")
                navigate('/')
            }
            else{
                return
            }
        }
    }

    useEffect(()=>{
        checkUser()
    },[])

  return (
    <div className='profile d-flex flex-column align-items-center pt-5'>
        <h1>Profile</h1>

        <div className='mt-5 profileContainer'>
            <h3 className='mb-3'>
                Edit Account Info
            </h3>

            <div className='updateForm d-flex flex-column'>
                <input type="text" placeholder='Change name...' 
                onChange={(e)=>setInput({...input,name:e.target.value})}/>
                <input type="password" placeholder='Change password...' 
                onChange={(e)=>setInput({...input,password:e.target.value})}/>
                <button className='btn  btn-warning' onClick={update}>Update</button>
            </div>

            <div className='mt-5 d-flex profileBtnDiv'>
                <button className='me-2' onClick={logout}>Logout</button>
                <button onClick={deleteAcc}>Delete account</button>
            </div>
        </div>

        <ToastContainer position='top-center' theme='colored'  autoClose={1000}/>
    </div>
  )
}

export default EditProfile