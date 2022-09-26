import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { loginSchema as schema } from "../utils/validation/schemas";
import { LOGIN_URL as url } from "../../constants/api";
import { StyledLoginFieldset } from "./forms.styles";
import { SubmitFormBtn } from "../buttons/SubmitFormBtn";

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
      setLoginError(error.response.data.error.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <div className="login-wrap" style={{ margin: "50px 20px 0 20px", maxWidth: "900px" }}>
        <form className="login-form" onSubmit={handleSubmit(tryToLogin)}>
          {loginError && (
            <div className="login-error" style={{ textAlign: "center", color: "red" }}>
              {loginError}
            </div>
          )}
          <StyledLoginFieldset className="login-fieldset" disabled={submitting}>
            <h1 style={{ marginTop: "0" }}>Log in as admin:</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="admin-username">Username: </label>
              <input className="login-form__input" id="admin-username" {...register("identifier")} />
              {errors.identifier && (
                <div id="form-error">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.identifier.message}
                </div>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
              <label htmlFor="admin-password">Password: </label>
              <input className="login-form__input" type="password" id="admin-password" {...register("password")} />
              {errors.password && (
                <div id="form-error">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.password.message}
                </div>
              )}
            </div>
            <SubmitFormBtn style={{ marginTop: "50px" }}>{submitting ? "Logging in..." : "Log in"}</SubmitFormBtn>
          </StyledLoginFieldset>
        </form>
      </div>
    </>
  );
}
