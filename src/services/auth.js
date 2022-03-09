import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [isAuthed, setAuthed] = useState(false);

  async function signIn({ email, senha }) {
    try {
      setAuthed(true);
    } catch (error) {
      setAuthed(false);
    }
  }

  async function logout() {
    setAuthed(false);
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        logout,
        isAuthed,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
