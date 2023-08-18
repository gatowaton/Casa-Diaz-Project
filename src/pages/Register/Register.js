import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import {useAuth} from "../../Context/AuthContext"
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"

function Register() {
  //valores del user en un estado
  const { register, handleSubmit, formState: {errors} } = useForm();

  //traer signup from useauth
  const {signup, isAuthenticated, errors: registerErrors} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate("/")
  }, [isAuthenticated, navigate])
  

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="register-form">
      {
        registerErrors.map((error, i) => (
          <div key={i}>
            {error}
          </div>
        ))
      }
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="username"
            {...register("username", { required: true })}
          />
          {errors.username && <p className="input-err">Username is required</p>}
        </div>
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
