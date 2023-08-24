import React, { useEffect } from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]); // Agrega navigate al arreglo de dependencias

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
<<<<<<< HEAD
    <div className="register">
    <div className="register-form-2">
      {
        registerErrors.map((error, i) => (
          <div key={i}>
            {error}
          </div>
        ))
      }
=======
    <div className="register-form">
      {registerErrors.map((error, i) => (
        <div key={i}>{error}</div>
      ))}
>>>>>>> 6ac9c0df95d2f5d49f97d1253028d381fcb7a539
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
