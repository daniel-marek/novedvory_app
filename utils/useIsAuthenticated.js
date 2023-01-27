import {getAuth, onAuthStateChanged, } from "firebase/auth";
import {useEffect, useState} from "react";

const useIsAuthenticated = () => {
  const auth = getAuth();
  const [isSettled,setIsSettled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(
     () => {
       const unsubsucribe = onAuthStateChanged(
         auth,
         (user) => {
           setIsAuthenticated(Boolean(user))
           setIsSettled(true);
         },

       )

       return () => unsubsucribe();
    }, [auth]
  );

  return {isAuthenticated, isSettled};
};

export default useIsAuthenticated;