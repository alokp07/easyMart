import React from 'react'
import '../landing/landing.css'
import Navbar from '../../components/navbar/Navbar'

function Landing() {
  return (
    <div className='landingDiv w-100'>

        <Navbar/>

        <div className='des'>
            <h1 className='mb-4'>Elevate Your Shopping <br /> Experience  with EasyMart</h1>
            <p className='mb-4'>Unveil the ultimate shopping experience at EasyMart. <br /> Discover curated collections, unbeatable deals, and seamless checkout. <br /> Elevate your shopping journey today.</p>
            <button className='btn btn-dark'>Shop now</button>
        </div>
    
    </div>
   
  )
}

export default Landing