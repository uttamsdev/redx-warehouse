import React from 'react';
import './AddInventoryItem.css';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import swal from 'sweetalert';


const AddInventoryItem = () => {
    const [user] = useAuthState(auth);
    // const { register, handleSubmit } = useForm();
    const { register, handleSubmit, reset} = useForm();
  const onSubmit = data => {
    fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      reset();
      swal("Item Inserted Successfully!", "Item Successfully Added to Database!", "success");
      
  };
  return (
    <form className='add-item' onSubmit={handleSubmit(onSubmit)}>
    <label className='text-danger fw-bolder fs-5 mb-2' htmlFor="add-item">Add Your Item:</label>
    <input className="form-control mb-2" type="text" {...register("email")} value={user.email}/>
    <input className="form-control mb-2" type="text" {...register("name")} placeholder='Product Name'/>
    <input className="form-control mb-2" type="number" {...register("price")}  placeholder='Enter Price'/>
    <input className="form-control mb-2" type="number" {...register("quantity")} placeholder='Quantity'/>
    <input className="form-control mb-2" type="text" {...register("supplierName")} placeholder='Supplier Name'/>
    <input className="form-control mb-2" type="text" {...register("img")} placeholder='Image URL'/>
    <textarea className="form-control" {...register("description")} cols="30" rows="5" placeholder='Write Product Description'></textarea>
    <input type="submit" value="Add Item" className='btn btn-danger mt-3' />
  </form>
  )
}

export default AddInventoryItem;