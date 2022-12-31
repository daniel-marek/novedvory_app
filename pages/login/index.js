import { useCallback, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import useIsAuthenticated from "../../utils/useIsAuthenticated";


const LoginPage = () => {
  const auth = getAuth();
  const {isAuthenticated} = useIsAuthenticated();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = useCallback((e) => setEmail(e.target.value), []);
  const onPasswordChange = useCallback((e) => setPassword(e.target.value), []);

  const onLogin = useCallback(async () => {
    try {
    await signInWithEmailAndPassword(auth, email, password)}
      catch (e) {
      const errorCode = e.code;
      const errorMessage = e.message;
      console.log({errorCode, errorMessage});
      }
  }, [auth, email, password]);

   const onLogOut = useCallback(() => {
    auth.signOut();
  }, [auth]);

  return (
    <div>
      <h2>Přihlášení pro správce</h2>
      <label>Email</label>
      <input value={email} type="text" onChange={onEmailChange}/>
      <label>Heslo</label>
      <input value={password} type="password" onChange={onPasswordChange}/>
      <button onClick={onLogin}>
        Log In
      </button>
      {isAuthenticated ? (<button onClick={onLogOut}>
        Log Out
      </button>) : null}

    </div>
  );
};

export default LoginPage;
