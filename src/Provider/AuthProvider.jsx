import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../firebase.config";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const signUp = (email, pass) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const [loading, setloading] = useState(true);
  const userinfo = { signUp, loading };

  return (
    <AuthContext.Provider value={userinfo}>{children}</AuthContext.Provider>
  );
};
