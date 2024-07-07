import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductArray } from '../../../Redux/Action';

const ProductList = () => {

  const dispatch = useDispatch();
  const {load_product_array} = useSelector((state)=>state.cartReducer);

  useEffect(()=>{
     dispatch(setProductArray())
  },[])

  return (
<>
<table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">X</th>
    </tr>
  </thead>
  <tbody>
    {
      load_product_array.map((item)=>{
        <tr>
        <td>{item.product_name}</td>
        <td>{item.product_price}</td>
      </tr>
      })
    }
  </tbody>
</table>
      </>
  )
}

export default ProductList