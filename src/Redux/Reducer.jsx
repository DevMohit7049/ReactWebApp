import { PRODUCT_ARRAY } from "./Action";
import { cartReducerInitData } from "./initReducer";

export const cartReducer = (state = cartReducerInitData, action) => {
 
   switch(action.type){
      case PRODUCT_ARRAY:
        return {...state, load_product_array: action.payload};
      
      default:
        return state;
   }
      
};
  
