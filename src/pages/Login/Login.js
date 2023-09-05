import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

function Login() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const { signin } = useAuth();

   const onSubmit = handleSubmit((data) => {
      signin(data);
   });

   return (
      <div className="container p-3">
         <Link to={`/`} style={{ color: "black", textDecoration: "none" }}>
            Inicio
         </Link>{" "}
         / Ingresar
         <div className="p-5 inicioForm">
            <div className="register-form p-4">
               <form onSubmit={onSubmit}>
                  <h5>Si ya tienes una cuenta, inicia sesión con tu correo</h5>
                  <p className="pt-2">Ingresa tu correo</p>
                  <div>
                     <input
                        className="form-label input-ini"
                        type="email"
                        placeholder="Correo"
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
                  <div className="pt-2">
                     <button className="btn btn-warning btn-iniciosesion" type="submit">
                        Iniciar sesion
                     </button>
                  </div>
               </form>
               <h4 className="pt-2">Crea tu cuenta de cliente</h4>
               <p className="register-link pt-3">
                  Registrate para poder realizar compras en nuestra tienda online, hacer seguimiento de tus compras, revisar
                  nuetras ofertas y mucho más. <br></br>
                  <Link to="/register">
                     <button type="button" className="btn btn-warning btn-iniciosesion">
                        Crear cuenta
                     </button>
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
}

export default Login;
