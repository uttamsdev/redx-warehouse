import React from 'react';
import {AiOutlineDelete} from 'react-icons/ai';
import swal from 'sweetalert';
import useItems from '../../Hooks/useItems';

const MyItem = ({item}) => {
    const {_id, name, price, quantity, description, img, supplierName} = item;
    const [items, setItems] = useItems();
    const handleDelete = (id) => {
      //sweet alert
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("Your Item has been deleted successfully!", {
              icon: "success",
            });
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                const remaining = items.filter((item) => item._id !== id);
                setItems(remaining);
              });
          } else {
            swal("Item not deleted. You cancelled.");
          }
        });
    }
    
  return (
    <tr>
    <td><img width={250} src={img} alt="" /></td>
    <td>{name}</td>
    <td>{price}</td>
    <td>{quantity}</td>
    <td>{supplierName}</td>
    <td>{description}</td>
    <td><button onClick={()=> handleDelete(_id)} className='btn btn-danger'>Delete This Item <AiOutlineDelete/></button></td>
  </tr>
  )
}

export default MyItem;