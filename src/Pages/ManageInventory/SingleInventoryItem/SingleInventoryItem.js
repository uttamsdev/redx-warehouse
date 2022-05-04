import React from 'react';
import './SingleInventoryItem.css';
import {AiOutlineDelete} from 'react-icons/ai';

const SingleInventoryItem = ({product}) => {
    const {_id,name, img, description, quantity, supplierName, price} = product;
  return (
    <div className='outer-product'>
    <div className='product'>
    <img width={360} height={313} src={img} alt="" />
    <div className='product-info'>
    <h6>{name}</h6>
    <small><b>Price:</b> {price}৳</small> <br />
    <small>{description.slice(0,140)}</small>
    <p><b>Quantity:</b> {quantity}</p>
    <p><b>Supplier:</b> {supplierName}</p>
    </div>
    <button className='stock-btn'>Delete This Item <AiOutlineDelete/></button>
</div>
</div>
  )
}

export default SingleInventoryItem;