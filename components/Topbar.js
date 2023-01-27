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
          <div className={`${styles.container__header} ${styles.container}`}>
            <a className={styles.logo} href="#">
            <img className={styles.logo__img}  src="logo.png" alt="logo-nove-dvory" />
            </a>
            <nav>
              <ul className={styles.nav__links}>
                <li><a href="#aktuality">Aktuality</a></li>
                <li><a href="#sponzori">Sponzoři</a></li>
                <li><a href="#klub">Klub</a></li>
                {/* <li><a href="#hriste">Hřiště</a></li> */}
                {/* <li><a href="#historie">Historie</a></li> */}
                
              </ul>
            </nav>
            <a className={styles.cta} href="https://is.fotbal.cz/souteze/detail-souteze.aspx?req=9767b870-a9eb-4444-bec0-01acaae098c9" target="_blank">
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