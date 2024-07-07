import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../Home/HomeComponent/SearchBar";
const Navbar = () => {


  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const logout=()=>{

    axios.get('https://reqres.in/api/logout')
    .then((res)=>{

       navigate('/login')
       localStorage.clear('user');
    })
    .catch((err)=>{
      console.log(err);
   })
    
 }


  return (
    <>

<nav className="navbar navbar-expand-lg bg-dark sticky-top ">
  <div className="container-fluid">
    <Link className="navbar-brand" style={{color:'#fff'}}>ReactWebApp</Link>
    
    <button class="navbar-toggler" type="button" style={{color:'white'}} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    
    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {
          !user ?<li className="nav-item">
              <Link className="nav-link" to={'/'} style={{color:'white'}}>login</Link>
            </li>:''
        }
      
     

        {
          user?<li className="nav-item">
          <Link className="nav-link" to={'/home'} style={{color:'white'}}>Home</Link>
        </li>:''
        }


        
       {user && <li className="cursor-pointer" onClick={logout}>
            <Link className="nav-link" style={{color:'white'}}>Logout</Link>
        </li>}
      </ul>
      <SearchBar/>

    </div>
  </div>
</nav> 

    </>
  );
};

export default Navbar;
