import React from 'react'
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products] = useProducts(false);
  return (
    <div className='products-container'>

        <div>
            <div className='products'>
                {
                    products.map(product => <Product product={product} key={product._id}></Product>)
                }
            </div>
        </div>
    </div>
  )
}

export default Products;