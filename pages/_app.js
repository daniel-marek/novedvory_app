import '../styles/globals.css'
import Topbar from "../components/Topbar";
import {initializeFirebase} from "../firebase";

initializeFirebase();

function MyApp({ Component, pageProps }) {

  return (
      <div>
          <Topbar/>
          <Component {...pageProps} />
      </div>
  )
}

export default MyApp
