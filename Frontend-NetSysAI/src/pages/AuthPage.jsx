import { useState } from "react";
import { registerUser } from "../services/auth";

function AuthPage({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) {
      setMessage("Completa todos los campos");
      return;
    }

    setLoading(true);
    setMessage("");

    if (!isLogin) {
      const res = await registerUser(email, password);

      if (res.error) {
        setMessage(res.error);
      } else {
        setMessage("Usuario registrado correctamente");
      }
    } else {
      setMessage("Login aún no implementado");
    }

    setLoading(false);
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Iniciar sesión" : "Registrarse"}</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {loading ? "Cargando..." : isLogin ? "Login" : "Register"}
      </button>
      <button onClick={goHome}>
        Volver
      </button>
      <p className="message">{message}</p>

      <span
        className="toggle"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin
          ? "¿No tenés cuenta? Registrate"
          : "¿Ya tenés cuenta? Iniciá sesión"}
      </span>
    </div>
  );
}

export default AuthPage;