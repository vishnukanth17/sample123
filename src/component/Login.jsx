import React from 'react'
import { NavLink } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {useState} from 'react'

function Login() {

  const {register, handleSubmit, formState:{errors}}=useForm()
  let [Login, setData]=useState([])
  const onFormSubmit=(userObj)=>{
     setData([...Login,userObj])
  }

  return (
    <div>
        <div className="container fs-5">
      <h1 className='text-center fw-bolder my-5 fs-9 ' style={{color:"red" ,backgroundColor:"black"}}>MART</h1>
    
      <form className='mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
        <div className="mb-3">
          <label htmlFor="InputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="InputEmail1"  placeholder="Enter your mail" {...register("InputEmail1",{required:true})}/>
          {errors.InputEmail1?.type==='required' && <p className='text-danger'>Email is required</p>}
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword1" className="form-label" >Password</label>
          <input type="password" className="form-control" id="InputPassword1" placeholder="Enter your password" {...register("InputPassword1",{required:true})} />
          {errors.InputPassword1?.type==='required' && <p className='text-danger'>Password is required</p>}
        </div>
       <div>
       <NavLink to="/" className="fs-5"> 
                        Forgot password?</NavLink>
      <p className='py-4 fs-5'>Don't have an account?
      <NavLink to="/register" className="px-3"> 
                        Sign Up</NavLink>
      </p>
      
       </div>
        <div className='d-flex justify-content-center'>
        <button type="submit" className="btn btn-dark ">Submit</button>
        </div>
      </form>
      </div>
      <div className='container'>
<h1 className='text-center p-3'>Submissions</h1>
<table className='table justify-content-evenly'>
  <thead className='text-center'>
<tr>
  <th>Username</th>
  <th>Password</th>

</tr>
  </thead>
  <tbody className='text-center'>
   { Login.map(userObj=> <tr key={userObj.InputEmail1}> 
    <td>{userObj.InputEmail1}</td>
    <td>{userObj.InputPassword1}</td>
    </tr>)
}

  </tbody>




</table>
      </div>
    </div>
  )
  }

export default Login;
