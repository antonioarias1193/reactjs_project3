import React from 'react'
import { Products } from '../../Products'
import {Product} from './Fragment/Product'

const Productcard = (props) => {
  return (
    <div className='flex justify-center'>
        <div className='flex flex-row flex-wrap w-11/12'>
            {Products.map((product) => (
            <Product data={product} key={product.id}></Product>
            // console.log(product.productName)
        ))}
        </div>
    </div>

  )
}


export default Productcard