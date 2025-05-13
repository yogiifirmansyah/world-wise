/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuth: false,
};

const FAKE_USER = {
  username: "Username",
  email: "user@gmail.com",
  password: "user123",
  image: "/profile.jpg",
};

function AuthProvider({ children }) {
  const [{ user, isAuth }, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "login":
        return {
          ...state,
          user: action.payload,
          isAuth: true,
        };
      case "logout":
        return {
          ...state,
          user: null,
          isAuth: false,
        };

      default:
        throw new Error("Unknown action");
    }
  }

  function login({ email, password }) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    } else {
      alert("Email or Password doesn't match!");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext
      value={{
        user,
        isAuth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("AuthContext was used outside the ContextProvider.");
  return context;
}

export { AuthProvider, useAuth };
