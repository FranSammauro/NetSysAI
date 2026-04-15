import { useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [page, setPage] = useState("home"); // se arranca el login

  return (
    <>
      {page === "login" && (
        <LoginPage goHome={() => setPage("home")} />
      )}

      {page === "home" && (
        <HomePage goLogin={() => setPage("login")} />
      )}
    </>
  );
}

export default App;