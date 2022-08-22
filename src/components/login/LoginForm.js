import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  username: yup.string().required("Please enter username"),
  password: yup.string().required("Please enter password"),
});

function LoginForm() {
  const [loginError, setLoginError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const history = useNavigate();

  function tryToLogin(data) {
    axios
      .post("https://andsty-noroff-exam2.herokuapp.com/api/auth/local", {
        identifier: "admin@admin.com",
        password: "admin123",
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        setSubmitting(false);
        history("/admin");
      })
      .catch((error) => {
        console.log("An error occured:", error.response);
        setLoginError(error.toString());
      });
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit(tryToLogin)}>
        {loginError && <div className="login-error">{loginError}</div>}
        <fieldset>
          <div>
            <input className="login-form__input" placeholder="Username" {...register("username")} />
            {errors.username && <div className="login-form__error">{errors.username.message}</div>}
          </div>
          <div>
            <input className="login-form__input" type="password" placeholder="Password" {...register("password")} />
            {errors.password && <div className="login-form__error">{errors.password.message}</div>}
          </div>
          <button>{submitting ? "Logging in..." : "Log in"}</button>
        </fieldset>
      </form>
    </>
  );
}

export default LoginForm;
