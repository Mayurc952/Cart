import React from 'react'
import Products from '../components/Product'

const Home = ({product,filterdata}) => {
  return (
    <div>
      <h2 className='heading'>Wellcome to Ecommerce</h2>
 <section>
        <h3>Products</h3>
        <Products product={product} filterdata={filterdata}/>
      </section>
    </div>
  )
}

export default Home
