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
    <div className="register-form">

      <form onSubmit={onSubmit}>
        <div>
          <input
            type="email"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="input-err">Email is required</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
          {errors.password && <p className="input-err">Password is required</p>}
        </div>
        <button type="submit">Login</button>
      </form>

      <p className='register-link'>¿No tienes cuenta? <Link to="/register"><strong>Registrate</strong></Link></p>
    </div>
  )
}

export default Login