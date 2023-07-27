import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import {useAuth} from "../../Context/AuthContext"

function Register() {
  //valores del user en un estado
  const { register, handleSubmit } = useForm();

  //traer singup from useauth
  const {singup, user} = useAuth()

  console.log(user);

  const onSubmit = handleSubmit(async (values) => {
    singup(values);
  });

  return (
    <div className="register-form">
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="username"
            {...register("username", { required: true })}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
