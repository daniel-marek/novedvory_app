import { useCallback, useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import useIsAuthenticated from '../../utils/useIsAuthenticated'
import { useRouter } from 'next/router'

const LoginPage = () => {
  const auth = getAuth()
  const { isAuthenticated } = useIsAuthenticated()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const onEmailChange = useCallback((e) => setEmail(e.target.value), [])
  const onPasswordChange = useCallback((e) => setPassword(e.target.value), [])

  const onLogin = useCallback(async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/dashboard')
    } catch (e) {
      const errorCode = e.code
      const errorMessage = e.message
      console.log({ errorCode, errorMessage })
    }
  }, [auth, email, password])

  const onLogOut = useCallback(() => {
    auth.signOut()
  }, [auth])

  return (
    <div className="">
      <div className="">
        <h2>Přihlášení pro správce</h2>

        <div className="">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={email}
            type="text"
            onChange={onEmailChange}
          />
        </div>

        <div className="">
          <label>Heslo</label>
          <input value={password} type="password" onChange={onPasswordChange} />
        </div>

        <div className="">
          <button onClick={onLogin}>Log In</button>
          {isAuthenticated ? <button onClick={onLogOut}>Log Out</button> : null}
        </div>
      </div>
    </div>
  )
}

export default LoginPage
