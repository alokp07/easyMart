import React, { useState } from 'react'
import '../userAuth/auth.css'
import { loginUser, registerUser } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth() {

  const [toggle,setToggle] = useState(true);
  const navigate = useNavigate()

  const [input,setInput] = useState({
    username:"",
    email:"",
    password:""
  })

  const userAuth = async()=>{

      if(toggle){

          let body={
            email:input.email,
            password:input.password
          }

          const result = await loginUser(body)
          
          if(result.status=="200"){
            const token = result.data.token;
            localStorage.setItem('token',token)
            navigate('/')
          }
          else{
            toast.error("Loggin error")
          }

      }
      else{

        let body={
          name:input.username,
          email:input.email,
          password:input.password
        }

        const result = await registerUser(body)

        if(result.status=="200"){
          const token = result.data.token;
          localStorage.setItem('token',token)
          navigate('/')
        }
        else{
          toast.error("Register error")
        }


      }
  }

  return (
    <div className='auth vh-100 position-relative'>

        <h1 className='authH1'>Easy<span className='text-danger'>M</span>art</h1>

        <div className='d-flex align-items-center justify-content-center flex-column form'>
          <h1>{toggle?"Login":"Register"}</h1>

          {toggle?"":
               <input type="text" placeholder='Username...'
               onChange={(e)=>setInput({...input,username:e.target.value})}/>
          }

          <input type="email" placeholder='Email...' 
              onChange={(e)=>setInput({...input,email:e.target.value})}/>


          <input type="password" placeholder='Password...'
          onChange={(e)=>setInput({...input,password:e.target.value})}/>

          <button className='btn mt-3' onClick={userAuth}>{toggle?"Login":"Register"}</button>
        </div>

        <div className='px-4 toggle'>
          <h1>{toggle?"Doesnt":"Already"} have an account? <br /> {toggle?"Register":"Login"} here</h1>
          <button className='btn mt-3 fs-5' 
          onClick={()=>toggle?setToggle(false):setToggle(true)}
          >{toggle?"Register":"Login"}</button>
        </div>
        <ToastContainer position='top-center' theme='colored'  autoClose={1000}/>

    </div>
  )
}

export default Auth