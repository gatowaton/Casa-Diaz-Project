import React, { useEffect } from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const { signup, isAuthenticated, errors: registerErrors } = useAuth();
   const navigate = useNavigate();

   useEffect(() => {
      if (isAuthenticated) navigate("/");
   }, [isAuthenticated, navigate]);

   const onSubmit = handleSubmit(async (values) => {
      signup(values);
   });

   return (
      <div className="container p-3">
         <Link to={`/`} style={{ color: "black", textDecoration: "none" }}>
            Inicio
         </Link>{" "}
         / Registrarse
         <div className="p-5 inicioForm">
            <div className="register-form p-4">
               {registerErrors.map((error, i) => (
                  <div key={i}>{error}</div>
               ))}
               <form onSubmit={onSubmit}>
                  <p className="pt-2">Ingresa tu correo</p>
                  <div>
                     <input
                        className="form-label input-ini"
                        type="text"
                        placeholder="Usuario"
                        {...register("username", { required: true })}
                     />
                     {errors.username && <p className="input-err">Username is required</p>}
                  </div>
                  <p>Ingresa tu correo</p>
                  <div>
                     <input
                        className="form-label input-ini"
                        type="Correo"
                        placeholder="email"
                        {...register("email", { required: true })}
                     />
                     {errors.email && <p className="input-err">Email is required</p>}
                  </div>
                  <p>Ingresa tu contraseña</p>
                  <div>
                     <input
                        className="form-label input-ini"
                        type="password"
                        placeholder="Contraseña"
                        {...register("password", { required: true })}
                     />
                     {errors.password && <p className="input-err">Password is required</p>}
                  </div>
                  <button className="btn btn-warning btn-iniciosesion" type="submit">
                     Registrarse
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default Register;
