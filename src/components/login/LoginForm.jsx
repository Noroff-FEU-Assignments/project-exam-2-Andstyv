import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { loginSchema as schema } from "../validation/schemas";
import { LOGIN_URL as url } from "../../constants/api";
import { StyledLoginFieldset } from "../forms/forms.styles";

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
    try {
      const response = await axios.post(url, data);
      setAuth(response.data);
      history("/admin/messages");
    } catch (error) {
      setLoginError(error.toString());
      console.log(loginError);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <div className="login-wrap" style={{ margin: "50px 20px 0 20px", maxWidth: "900px" }}>
        <form className="login-form" onSubmit={handleSubmit(tryToLogin)}>
          {loginError && <div className="login-error">{loginError}</div>}
          <StyledLoginFieldset className="login-fieldset" disabled={submitting}>
            <h1 style={{ marginTop: "0" }}>Log in as admin:</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="admin-username">Username: </label>
              <input className="login-form__input" placeholder="admin@admin.com" id="admin-username" {...register("identifier")} />
              {errors.identifier && (
                <div id="form-error">
                  <i class="fas fa-exclamation-circle"></i>
                  {errors.identifier.message}
                </div>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
              <label htmlFor="admin-password">Password: </label>
              <input className="login-form__input" type="password" placeholder="admin123" id="admin-password" {...register("password")} />
              {errors.password && (
                <div id="form-error">
                  <i class="fas fa-exclamation-circle"></i>
                  {errors.password.message}
                </div>
              )}
            </div>
            <button style={{ marginTop: "50px" }}>{submitting ? "Logging in..." : "Log in"}</button>
          </StyledLoginFieldset>
        </form>
      </div>
    </>
  );
}
