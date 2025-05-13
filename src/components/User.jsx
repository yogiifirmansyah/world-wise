import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/FakeAuthContext";
import Button from "./Button";

function User() {
  const { user, isAuth, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return;

  function handleLogout() {
    logout();

    if (!isAuth) {
      navigate("/");
    }
  }

  return (
    <div className="fixed z-[1000] top-2 right-2 flex items-center gap-x-2 p-2 bg-slate-950 text-white rounded-sm">
      <img src={user.image} alt="" className="w-6 h-6 rounded-full" />
      <span className="text-sm font-medium">Welcome, {user.username}</span>
      <Button type={"logout"} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default User;
