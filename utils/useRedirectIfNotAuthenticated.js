import useIsAuthenticated from "./useIsAuthenticated";
import {useEffect} from "react";
import {useRouter} from "next/router";

const useRedirectIfNotAuthenticated = () => {
  const router = useRouter();
  const {isAuthenticated, isSettled} = useIsAuthenticated();
  useEffect(() => {
    if (isSettled && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router, isSettled]);
}

export default useRedirectIfNotAuthenticated;