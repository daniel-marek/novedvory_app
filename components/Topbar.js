import {useState} from "react";

import styles from "../styles/Home.module.scss";
import Link from "next/link";


const Topbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
          <div className={styles.container__header}>
            <a className={styles.logo} href="#">
            <img className={styles.logo__img}  src="logo.png" alt="logo-nove-dvory" />
        </a>
        <nav>
          <ul className={styles.nav__links}>
            <li><Link href="/hovinko">Hovinko</Link></li>
            <li><a href="#">Muži A</a></li>
            <li><a href="#">Hřiště</a></li>
            <li><a href="#">Sponzoři</a></li>
            <li><a href="#">Historie</a></li>
            <li><a href="#">Klub</a></li>
          </ul>
        </nav>
        <a className={styles.cta} href="#">
            <button>Program zápasů</button>
        </a>
        </div>
      </header>
    )
}

export default Topbar