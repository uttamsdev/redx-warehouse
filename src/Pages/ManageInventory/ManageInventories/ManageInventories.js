import React from 'react';
import useProducts from '../../Hooks/useProducts';
import SingleInventoryItem from '../SingleInventoryItem/SingleInventoryItem';
import './ManageInventories.css';

const ManageInventories = () => {
    const [products,setProducts] = useProducts(true);
  return (
   <div>
       <h3 className='text-center mt-5'>All Inventories Items</h3>
        <div className='products-container'>
        <div className='products'>
            {
                products.map(product => <SingleInventoryItem product={product} key={product._id}></SingleInventoryItem>)
            }
        </div>
    </div>
   </div>
  )
}

export default ManageInventories;