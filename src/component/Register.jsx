import React from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  let [Login, setData] = useState([])
  const onFormSubmit = (userObj) => {
    setData([...Login, userObj])
  }

  return (
    <div>
      <div className="container fs-5 p-5">
        <h1 className='text-center fw-bolder my-5 fs-9 ' style={{ color: "red", backgroundColor: "black" }}>MART</h1>

        <form className='mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
          <div className="mb-3">
            <label htmlFor="InputUsername1" className="form-label" >Username</label>
            <input type="text" className="form-control" id="InputUsername1" placeholder="Enter your Username" {...register("InputUsername1", { required: true })} />
            {errors.InputUsername1?.type === 'required' && <p className='text-danger'>Username is required</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="InputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="InputEmail1" placeholder="Enter your mail" {...register("InputEmail1", { required: true })} />
            {errors.InputEmail1?.type === 'required' && <p className='text-danger'>Email is required</p>}
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="InputPassword1" className="form-label" >Password</label>
            <input type="password" className="form-control" id="InputPassword1" placeholder="Enter your password" {...register("InputPassword1", { required: true })} />
            {errors.InputPassword1?.type === 'required' && <p className='text-danger'>Password is required</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="CInputPassword1" className="form-label" >Confirm Password</label>
            <input type="password" className="form-control" id="CInputPassword1" placeholder="Enter your password" {...register("CInputPassword1", { required: true })} />
            {errors.InputPassword1?.type === 'required' && <p className='text-danger'>Password is required</p>}
          </div>

          <div className='mb-3'>
          <label htmlFor="dob" className="form-label">DOB</label>
          <input type="date" className="form-control" placeholder="DOB" {...register ("dob", { required: true })}/> 
          {errors.dob?.type === 'required' && <p className='text-danger'>DOB is required</p>}
          </div>

          <div className='mb-3'>
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" placeholder="Enter Your Address" {...register ("address", { required: true })}/>
          {errors.address?.type === 'required' && <p className='text-danger'>Address is required</p>}
          </div>

          <div>
          <NavLink to="/login" className="signup-image-link">I am already registered !</NavLink>
          </div>

          <div className='d-flex justify-content-center'>
            <button type="submit" className="btn btn-dark ">Submit</button>
          </div>
        </form>
      </div>
      
      <div className='container'>
        <h1 className='text-center my-5' style={{fontFamily: 'cursive'}}>Submissions</h1>
        <table className='table justify-content-evenly'>
          <thead className='text-center'>
            <tr>
              <th>Username</th>
              <th>Mail</th>
              <th>Password</th>
              <th>Confirm Password</th>
              <th>DOB</th>
              <th>Address</th>
            </tr>

          </thead>
          <tbody className='text-center'>
            {Login.map(userObj => <tr key={userObj.InputEmail1}>
              <td>{userObj.InputUsername1}</td>
              <td>{userObj.InputEmail1}</td>
              <td>{userObj.InputPassword1}</td>
              <td>{userObj.CInputPassword1}</td>
              <td>{userObj.dob}</td>
              <td>{userObj.address}</td>
            </tr>)
            }
          </tbody>

        </table>
      </div>
    </div>
  )
}


export default Register