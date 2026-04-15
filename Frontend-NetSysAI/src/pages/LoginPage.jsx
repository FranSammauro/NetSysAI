import { loginUser, registerUser } from "../services/api";
import { useState } from "react";

function LoginPage({ goHome }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("EMAIL:", email);
    console.log("PASSWORD:", password);
    
      if (!email || !password) {
    setError("Completa todos los campos");
    return;
  }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setLoading(true);
    setError("");

    try {
      let data;

      if (isLogin) {
        data = await loginUser(email, password);
      } else {
        await registerUser(email, password);
        data = await loginUser(email, password);
      }

      console.log("RESPONSE:", data);

      if (data.access_token) {
        goHome();
      } else {
        setError("Invalid credentials");
      }

    } catch (err) {
      setError("Server error");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>NetSys AI</h2>

        <h3>{isLogin ? "Login" : "Register"}</h3>

        {/* FORM  */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error-text">{error}</p>}

          <button type="submit">
            {loading
              ? isLogin
                ? "Logging in..."
                : "Registering..."
              : isLogin
              ? "Login"
              : "Register"}
          </button>
        </form>

        <p className="switch-mode">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Register" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;