import React, { useEffect, useState } from 'react'
import '../home/home.css'
import Landing from '../../components/landing/Landing'
import { getItems } from '../../api/api'
import Product from '../../components/product/Product'
import Footer from '../../components/footer/Footer'

function Home() {

  const [product,setProduct] = useState([])

  const getProducts = async()=>{
      const result = await getItems();
      if(result.status=='200'){
        setProduct(result.data)
      }
  }

  
  
  console.log(product[0]);
  
  useEffect(()=>{
    getProducts()
  },[])

  return (
    <div>
        <Landing/>

        <div className='d-flex flex-column align-items-center mt-5'>
            <h2>Popular Products</h2>
            <div className='btnContainer'>
                <button>Smartphones</button>
                <button>Laptops</button>
                <button>Womans</button>
                <button>Footwares</button>
                <button className='me-0'>Earphones</button>
            </div>
        </div>

        <div className='d-flex productContainer'>
          {
            product.length>0?product.map((item)=>(
              <Product product={item}/>
            ))
            :
            ""
          }
        </div>

        <div className='d-flex justify-content-center mt-5 mb-5'>
          <button className='btn btn-warning fs-5'>All Products</button>
        </div>


        <Footer/>

    </div>
  )
}

export default Home