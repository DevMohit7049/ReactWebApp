
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setProductArray } from '../../../Redux/Action';

const AddForm = () => {

  const [products, setProducts] = useState([]);
  const [product_name, setName] = useState('');
  const [product_price, setPrice] = useState('')
  const dispatch = useDispatch();


  useEffect(()=>{
     dispatch(setProductArray(products));
  },[products]);




  const handleSubmit=(e)=>{

    e.preventDefault()
    if(product_name==='' || product_price===''){
       alert('All Fields Are Required'); 
    }
    if (product_name&&product_price){
      const DuplicateProduct = products.some(productItem => productItem.product_name === product_name);

      if(DuplicateProduct){
        alert('Product Already Exist')
      }
      else{
        const newProduct = { product_name, product_price };
        setProducts([...products, newProduct]);
        alert('product added')
        setName('');
        setPrice('');
      }
    }
      
} 

  
  return (
    <>    
    <div className="container" style={{width:'30%',border:'1px solid black',marginTop:'50px',borderRadius:'10px',backgroundColor:'white'}}>
    <h3 className="text-center" style={{margin:'revert',color:'black'}}>Add Product</h3>
    <form onSubmit={handleSubmit}>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Product Name"
          name="title"
          value={product_name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Product Price"
          value={product_price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" style={{width:'100%'}}>
        Add Product
      </button>
    </form>
  </div>
  </>
  )
}

export default AddForm