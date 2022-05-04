import React from 'react'
import { useParams } from 'react-router-dom';
import useProduct from '../Hooks/useProduct';
import './Inventory.css';

const Inventory = () => {
    const {id} = useParams();
    const [product] = useProduct(id);
  return (
    <div className='product-information'>
        <img src={product.img} alt="" />
        <p><b>Product ID: </b> {product._id}৳</p>
        <h5><b>Product Name:</b> {product.name}</h5>
        <p><b>Price: </b> {product.price}৳</p>
        <small>{product.description}</small>
        <p><b>Quantity: </b>{product.quantity}</p>
        <p><b>Supplier name:</b> {product.supplierName}</p>
        <button className='delivered-btn'>Delivered</button>
        <form>
            <label htmlFor="restock">Restock the item</label>
            <input className='item-quantity form-control' type="number" name="restock" id="" placeholder='Enter number of items'/>
            <input className='btn btn-dark mt-3 mb-5' type="submit" value="Add Quantity" />
        </form>
    </div>
  )
}

export default Inventory;