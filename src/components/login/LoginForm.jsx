import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const url = "https://andsty-noroff-exam2.herokuapp.com/api/auth/local";

const schema = yup.object().shape({
  identifier: yup.string().required("Please enter identifier"),
  password: yup.string().required("Please enter password"),
});

export function LoginForm() {
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

  // eslint-disable-next-line
  const [auth, setAuth] = useContext(AuthContext);

  async function tryToLogin(data) {
    setLoginError(null);
    setSubmitting(true);
    console.log(data);
    try {
      const response = await axios.post(url, data);
      setAuth(response.data);
      history("/admin/messages");
    } catch (error) {
      setLoginError(error.toString());
      console.log("error");
    } finally {
      setSubmitting(false);
      console.log("Finally");
    }
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit(tryToLogin)}>
        {loginError && <div className="login-error">{loginError}</div>}
        <fieldset className="login-fieldset" disabled={submitting}>
          <div>
            <input className="login-form__input" placeholder="admin@admin.com" {...register("identifier")} />
            {errors.identifier && <div className="login-form__error">{errors.identifier.message}</div>}
          </div>
          <div>
            <input className="login-form__input" type="password" placeholder="admin123" {...register("password")} />
            {errors.password && <div className="login-form__error">{errors.password.message}</div>}
          </div>
          <button>{submitting ? "Logging in..." : "Log in"}</button>
        </fieldset>
      </form>
    </>
  );
}
