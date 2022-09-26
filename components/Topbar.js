import {useState} from "react";

import styles from "../styles/Home.module.scss";
import Link from "next/link";


const Topbar = () => {
    // const [burger-bar, setBurgerClass] = useState("burger-bar unclicked")
    // const [menu_class, setMenuClass] = useState("menu hidden")
    // const [isMenuClicked, setIsMenuClicked] = useState(false)

    // const updateMenu = () => {
    //   if(!isMenuClicked) {
    //     setBurgerClass("burger-bar clicked")
    //     setMenuClass("menu visible")
    //   } else {
    //     setBurgerClass("burger-bar unclicked")
    //     setMenuClass("menu hidden")
    //   }
    // }
    



    return (
        <header className={styles.header}>
          <div className={styles.container__header}>
            <a className={styles.logo} href="#">
            <img className={styles.logo__img}  src="logo.png" alt="logo-nove-dvory" />
            </a>
            <nav>
              <ul className={styles.nav__links}>
                <li><a href="#">Aktuality</a></li>
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
            <div className={styles.hamburger} >
              <span className={`${styles.burger__bar} ${styles.unclicked}`}></span>
              <span className={`${styles.burger__bar} ${styles.unclicked}`}></span>
              <span className={`${styles.burger__bar} ${styles.unclicked}`}></span>
            </div>
          </div>
      </header>
    )
}

export default Topbar