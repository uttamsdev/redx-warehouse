import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useItems from '../../Hooks/useItems';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [items, setItems] = useItems();
  return (
    <div>
        <h3 className='text-center mt-4 mb-3'>My Items</h3>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Supplier Name</th>
      <th>Description</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
         {
            //  items.map(item => <MyItem item={item} key={item._id}></MyItem>)
             items.map(item => <MyItem item={item} key={item._id}></MyItem>)
         }
  </tbody>
</Table>
        
    </div>
  )
}

export default MyItems;