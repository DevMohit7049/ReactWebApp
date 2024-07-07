import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router'
import { setProductArray } from "../../../Redux/Action";

const SearchBar = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const getAllProduct = useSelector((state) => state.cartReducer);

  
  useEffect(() => {
    dispatch(setProductArray());
  }, [dispatch]);




  // console.log(search);
  // const filterSearchData = getAllProduct.filter((obj) => obj.product_title.toLowerCase().includes(search)).slice(0, 8);


  return (
    <>
      <div>
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-center"></div>

    </>
  );
};

export default SearchBar;
