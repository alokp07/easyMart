import React from 'react'
import '../product/product.css'

function Product({product}) {
  return (
    <div className='product d-flex flex-column align-items-center mt-5 py-3 px-4' style={{width:'20rem'}}>
            <div>
              <img src={product?product.image:""} alt="" width={'230px'} height={'240px'}/>
            </div>

            <div className='mt-4'>
              <h3>{product?product.title.slice(0,13)+"..":""}</h3>
              <p>{product?product.description.slice(0,50)+"...":''}</p>
            </div>

            <div className="buy">
                 <h5 id="prise" className='m-0'><i className="fa-solid fa-dollar-sign"></i>{product?product.price:""}</h5>
                 <button id="buy-btn"><i className="fa-solid fa-cart-shopping"></i></button>
            </div>
    </div>
  )
}

export default Product