import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductArray } from "../../../Redux/Action";

const ProductList = () => {
  const dispatch = useDispatch();
  const load_product_array = useSelector((state) => state.cartReducer.load_product_array);

  const localProduct = JSON.parse(localStorage.getItem('productData'));
  console.log(localProduct);
  
  useEffect(() => {
    dispatch(setProductArray());
  }, [dispatch]);

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
          {Object.keys(localProduct).map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{localProduct[item].product_name}</td>
              <td>{localProduct[item].product_price}</td>
              <td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
