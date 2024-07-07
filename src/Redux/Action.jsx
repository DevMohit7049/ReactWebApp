// actions.js

export const PRODUCT_ARRAY = 'PRODUCT_ARRAY'

export const setProductArray = (productArray) =>{
  
  return async dispatch=>{
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
  