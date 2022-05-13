import { createContext, useState } from "react";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: {},
    message: "Hello Auth!"
  })

  const setAuthInfo = ({ token, user }) => {
    setAuthState({
      token,
      user
    })
  }

  return (
    <Provider
      value={{ 
        authState,
        setAuthState: authInfo => setAuthInfo(authInfo)
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider }
