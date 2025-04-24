import React from 'react'
import { useNavigate } from 'react-router-dom';

function Product({product}) {
    const {id, name, price} = product;//we distructed the product here

    const navigate = useNavigate();//we assigned useNavigate to a variable to use in button (when an action like a click occurs, useNavigate takes us to the URL we want to go )

  return (
    <div style={{marginBottom: '40px', backgroundColor: 'lightgray'}}>
        <div>Product Details</div>
        <h3>Name: {name} </h3>
        <h3>Price: {price} </h3>
        <button onClick={()=> navigate("/product-details/" + id)}>Go to details</button>
    </div>
  )
}

export default Product