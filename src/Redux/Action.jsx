// actions.js

export const PRODUCT_ARRAY = 'PRODUCT_ARRAY'

export const setProductArray = (productArray) =>{
  console.log(productArray);
  
  return dispatch=>{
    try
    {
      dispatch({
        type:PRODUCT_ARRAY,
        payload:productArray
      });

    }
    catch(err){
       alert('Product Loading Error');
    }
}
}
  