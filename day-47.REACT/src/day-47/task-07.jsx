import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // simulate login success
    const isLoggedIn = true;

    if (isLoggedIn) {
      navigate("/dashboard", { replace: true });
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
