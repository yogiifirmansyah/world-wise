import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
import { useAuth } from "../context/FakeAuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("user123");

  const { login, isAuth } = useAuth();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const newUser = {
      email,
      password,
    };

    login(newUser);
  }

  useEffect(
    function () {
      if (isAuth) navigate("/app");
    },
    [isAuth, navigate]
  );

  return (
    <div className="w-full min-h-screen bg-slate-900">
      <PageNav />
      <form onSubmit={handleLogin} className="flex flex-col gap-y-4 mx-auto mt-28 max-w-md bg-slate-800 px-6 py-4 rounded-sm">
        <div className="flex flex-col w-full gap-y-1">
          <label htmlFor="email" className="text-white font-medium text-sm">
            Email address
          </label>
          <input type="email" className="bg-slate-200 pl-2 rounded-sm h-8" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="flex flex-col w-full gap-y-1">
          <label htmlFor="email" className="text-white font-medium text-sm">
            Password
          </label>
          <input type="password" className="bg-slate-200 pl-2 rounded-sm h-8" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button type={"submit"}>Login</Button>
      </form>
    </div>
  );
}

export default Login;
