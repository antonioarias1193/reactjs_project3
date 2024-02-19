import React, { Fragment } from 'react'

export const Product = (props) => {
    const {id, productName, image, price} = props.data
  return (
    <Fragment>
        <div className='w-fit flex flex-col justify-center align-middle text-center gap-2 my-6 mx-5 text-white'>
            <div className='size-40'>
                <img src={image} className='size-full object-cover'/>
            </div>
            <div className='font-[Tahoma] font-bold'>
                {productName}
            </div>
                {price}
        </div>
    </Fragment>
  )
}
