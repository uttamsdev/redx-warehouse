import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const useItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(()=>{
        const email = user.email;
        const url = `http://localhost:5000/items?email=${email}`;
        fetch(url,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setItems(data))
    },[items,user.email])
    return [items,setItems];
}
export default useItems;