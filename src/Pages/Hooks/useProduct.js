import React, { useEffect, useState } from "react";

const useProduct = (productId) => {
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/products/${productId}`)
    .then(res => res.json())
    .then(data => setProduct(data))
    },[productId])
    return [product];
}
export default useProduct;