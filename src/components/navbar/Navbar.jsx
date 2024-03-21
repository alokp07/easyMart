import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../navbar/navbar.css'

function Navbar() {

  
  const [login,setLogin] = useState(false)

  const userStatus = ()=>{
      let token = localStorage.getItem('token')
      token?setLogin(true):setLogin(false)
  }

  useEffect(()=>{
    userStatus()
  },[])

  return (
    <div className='navbar'>
        <div>
            <h1>Easy<span className='text-danger'>M</span>art</h1>
        </div>

        <div>
            <input type="text" placeholder='Search here...' />
        </div>

        <div>
            <button className='btn btn-outline-dark me-2'><i className="fa-solid fa-bag-shopping"></i></button>
            <Link to={login?"profile":"auth"}><button className='btn btn-dark'>{login?"Profile":"Login"}</button></Link>
        </div>
    </div>
  )
}

export default Navbar