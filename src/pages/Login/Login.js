import React from 'react'
import "./Login.css"
import { useForm } from "react-hook-form";
import { useAuth } from '../../Context/AuthContext';
import {Link} from "react-router-dom"

function Login() {

  const {register, handleSubmit, formState:{errors}} = useForm();

  const {signin,} = useAuth();

  const onSubmit = handleSubmit((data)=>{
    signin(data)
  })

  return (
    <div className="container-md-nn">
    <div className="register-form">
      <form onSubmit={onSubmit}>
      <h3>Ingresa</h3>
        <div className='input-ll'>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="input-err">Email is required</p>}
        </div>
        <div className='input-ll'>
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <p className="input-err">Password is required</p>}
        </div>
        
        <button type="submit" className='button-ls'>Login</button>
        
      </form>

      <p>¿No tienes cuenta? <Link to={"/register"}><strong>Registrate</strong></Link></p>
    </div>
    </div>
  )
}

export default Login