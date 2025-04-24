import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products';
import Product from '../components/Product';

function ProductDetails() {

    const {id} = useParams();//it takes dynamic parameters in URL

  return (
   <div>
     <h1>Product Details</h1>
     <hr />
     {
        products && products.map((product) => {
            if(product.id == id) {
                return <Product product={product} />/** props */
            }
        })
     }
   </div>
  )
}

export default ProductDetails