import React, { useEffect, useState } from "react";
import "./Login.css";
import { RxCross2 } from "react-icons/rx";
import Cookies from "js-cookie";

const Login = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    username: false,
    password: false,
    email: false,
  });
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const gira = () => {
    document.body.classList.add("gira");
  };

  const rigira = () => {
    document.body.classList.remove("gira");
  };

  const login = async () => {
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      Cookies.set("auth-token", responseData.token, { expires: 7 });
      localStorage.setItem("auth-token", responseData.token);

      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    // Verifica se la password soddisfa i requisiti
    if (!passwordRegex.test(formData.password)) {
      let missingElements = "";
      if (!/(?=.*[A-Z])/.test(formData.password)) {
        missingElements += "una lettera maiuscola, ";
      }
      if (!/(?=.*\d)/.test(formData.password)) {
        missingElements += "un numero, ";
      }
      if (formData.password.length < 8) {
        missingElements += " 8 caratteri, ";
      }

      // Rimuovi l'eventuale virgola finale
      if (missingElements.endsWith(", ")) {
        missingElements = missingElements.slice(0, -2);
      }

      setErrors({
        ...errors,
        password: true,
      });

      // Visualizza il messaggio di errore sotto il campo password
      setPasswordErrorText(
        `La password deve contenere almeno ${missingElements}.`
      );
      return;
    }

    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="cont_log">
      <RxCross2
        className="ccc"
        onClick={() => {
          props.gira();
          setErrors({
            username: formData.username,
            email: formData.email,
            password: formData.password,
            repeatPassword: formData.repeatPassword,
          });
        }}
      />
      <div className="login">
        <label className="intestazione">
          <h1>LOG-IN</h1>
        </label>
        <div className="dati">
          <input
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            className={errors.email ? "error" : ""}
          />
          {errors.email && <p className="error-text">Campo obbligatorio</p>}

          <input
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            className={errors.password ? "error" : ""}
          />
          {errors.password && <p className="error-text">Campo obbligatorio</p>}
        </div>

        <div className="bottone">
          <button
            onClick={() => {
              if (!formData.email || !formData.password) {
                setErrors({
                  email: !formData.email,
                  password: !formData.password,
                });
                return;
              }
              login();
            }}
          >
            INVIA
          </button>
        </div>
        <div className="div_login">
          <p>Non hai ancora un account?</p>
          <p className="ris" onClick={gira}>
            Registrati
          </p>
        </div>
      </div>
      <div className="register">
        <label className="intestazione">
          <h1>REGISTRATI</h1>
        </label>
        <div className="dati">
          <input
            placeholder="Nome"
            name="username"
            value={formData.username}
            onChange={changeHandler}
            type="text"
            className={errors.username ? "error" : ""}
          />
          {errors.username && <p className="error-text">Campo obbligatorio</p>}

          <input
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            className={errors.email ? "error" : ""}
          />
          {errors.email && <p className="error-text">Campo obbligatorio</p>}

          <input
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            className={errors.password ? "error" : ""}
          />
          {errors.password && <p className="error-text">Campo obbligatorio</p>}
          {passwordErrorText && (
            <p className="error-text">{passwordErrorText}</p>
          )}
          <input
            placeholder="Ripeti password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={changeHandler}
            type="password"
            className={errors.repeatPassword ? "error" : ""}
          />
          {errors.repeatPassword && (
            <p className="error-text">Campo obbligatorio</p>
          )}
        </div>
        <div className="bottone">
          <button
            onClick={() => {
              if (
                !formData.username ||
                !formData.email ||
                !formData.password ||
                !formData.repeatPassword
              ) {
                setErrors({
                  username: !formData.username,
                  email: !formData.email,
                  password: !formData.password,
                  repeatPassword: !formData.repeatPassword,
                });
                return;
              }
              signup();
            }}
          >
            INVIA
          </button>
        </div>
        <div className="div_login">
          <p>Hai già un account?</p>
          <p className="ris" onClick={rigira}>
            Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
