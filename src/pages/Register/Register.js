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
    <div className="register-form-2">
      {
        registerErrors.map((error, i) => (
          <div key={i}>
            {error}
          </div>
        ))
      }     

    <div className="register">
      {registerErrors.map((error, i) => (
        <div key={i}>{error}</div>
      ))}
      <form onSubmit={onSubmit}>
        <div className="labell-jd">
          <h3>Regítrate aquí</h3>
          <input
            type="text"
            placeholder="Nombre del usuario"
            {...register("username", { required: true })}
          />
          {errors.username && <p className="input-err">Usuario requerido</p>}
        </div>
        <div className="labell-jd">
          <input
            type="email"
            placeholder="Correo"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="input-err">Correo requerido</p>}
        </div>
        <div className="labell-jd">
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          {errors.password && <p className="input-err">Contraseña requerida</p>}
        </div>
      
        <button type="submit" className="but-dl" href="/Home">Registrarse</button>
        
      </form>
    </div>
    </div>
  );
}

export default Register;
