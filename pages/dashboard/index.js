import {useEffect} from "react";
import {useRouter} from "next/router";
import useIsAuthenticated from "../../utils/useIsAuthenticated";

const useRedirectIfNotAuthenticated = (router) => {
  const {isAuthenticated, isSettled} = useIsAuthenticated();
  useEffect(() => {
    if (isSettled && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router, isSettled]);
}

const Dashboard = () => {
  const router = useRouter();
  useRedirectIfNotAuthenticated(router)
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;