import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar'
import Home from '../Component/Home/Home';
import Login from '../Component/Pages/Registration/Login';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import ProductList from '../Component/Home/HomeComponent/ProductList';
const Mapping = () => {
  return (

    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
         <Route>
             <Route path='/login' element={<Login/>}/>
             <Route path='/home' element={<Home/>}/>
             <Route path='/productList' element={<ProductList/>}/>
            
         </Route>
    </Routes>
 </BrowserRouter>
 </Provider>

  )
}

export default Mapping