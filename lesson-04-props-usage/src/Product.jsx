import React from 'react'

function Product(props) {//we can write the parameters (productName, price) instead of props. When we do this we use {productname} or {price}, not {props.productName} in HTML
    const {productName, price} = props;//we can destruct like this instead
  return (
    <div>
        <div>PRODUCT INFORMATIONS</div>
        
        <div><div>name: {props.productName} </div>
        <div>price: {price} </div></div> 
        {/* if we distruct we can use productName or price without "props." */}
    </div>
  )
}

export default Product