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
  }, [isAuthenticated])
  

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="register">
    <div className="register-form-2">
      {
        registerErrors.map((error, i) => (
          <div key={i}>
            {error}
          </div>
        ))
      }
      <form onSubmit={onSubmit}>
        <div className="labell-jd">
          <h3>Regítrate</h3>
          <input
            type="text"
            placeholder="Username"
            {...register("username", { required: true })}
          />
          {errors.username && <p className="input-err">Username is required</p>}
        </div>
        <div className="labell-jd">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="input-err">Email is required</p>}
        </div>
        <div className="labell-jd">
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <p className="input-err">Password is required</p>}
        </div>
      
        <button type="submit" className="but-dl">Registrarse</button>
        
      </form>
    </div>
    </div>
  );
}

export default Register;
