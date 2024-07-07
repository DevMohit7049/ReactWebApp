import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router'
import { setProductArray } from "../../../Redux/Action";

const SearchBar = () => {
  const dispatch = useDispatch();
  const getAllProduct = useSelector((state) => state.cartReducer);

   console.log(getAllProduct);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  console.log(search);
  // const filterSearchData = getAllProduct.filter((obj) => obj.product_title.toLowerCase().includes(search)).slice(0, 8);

  useEffect(() => {
    dispatch(setProductArray());
  }, []);

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
