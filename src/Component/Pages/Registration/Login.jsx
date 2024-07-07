import { yupResolver } from '@hookform/resolvers/yup';
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginSchema } from '../../LoginSchema/LoginSchema';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = () => {

  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


// login functionality //

const onSubmit=()=>{
  
   axios.post('https://reqres.in/api/login',{email,password})
   .then((res)=>{

    const user = res.data;
    localStorage.setItem('user',JSON.stringify(user));
    navigate('/addproduct')
    
 }).catch((err)=>{

    console.log(err);
 })
}

const{register,
  handleSubmit,formState:{errors}} = useForm({
      resolver:yupResolver(LoginSchema)
 });


return (
   <>
<form onSubmit={handleSubmit(onSubmit)}>
  <div className="container">
    <h2>Login</h2>
    <div class="mb-3">  
      <input 
        type="text" 
        class="form-control"  
        placeholder="Enter Email"
        {...register('email')}
        onChange={(e)=>setEmail(e.target.value)}
        value={email || ''}/>
        <p style={{ color: "#ff0000" }}>{errors.email && errors.email?.message}</p>
  </div>

  <div class="mb-3">  
    <input 
      type="password" 
      class="form-control"  
      placeholder="Enter Password"
      {...register('password')}
      onChange={(e)=>setPassword(e.target.value)}
      value={password || ''}/>
      <p style={{ color: "#ff0000" }}>{errors.password && errors.password?.message}</p>
  </div>

     <button  className='btn btn-primary' style={{width:'100%'}}>Login</button>
</div>

</form>
   </>
  )
}

export default Login