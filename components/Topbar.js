import { useState, useCallback } from 'react'

import styles from '../styles/Topbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuClick = useCallback(() => {
    setMenuOpen((v) => !v)
  }, [])

  const scrollToElement = useCallback((id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <Link className={styles.logo} href="/">
          <Image
            src="/logo.png"
            width="100%"
            height="100%"
            alt="logo-nove-dvory"
          />
        </Link>
        <nav className={`${styles.nav} ${menuOpen ? styles.nav__open : ''}`}>
          <a
            className={styles.nav__link}
            onClick={() => scrollToElement('aktuality')}
          >
            Aktuality
          </a>
          <a
            className={styles.nav__link}
            onClick={() => scrollToElement('sponzori')}
          >
            Sponzoři
          </a>
          <a
            className={styles.nav__link}
            onClick={() => scrollToElement('klub')}
          >
            Klub
          </a>
        </nav>
        <a
          className={styles.cta}
          href="https://is.fotbal.cz/souteze/detail-souteze.aspx?req=9767b870-a9eb-4444-bec0-01acaae098c9"
          target="_blank"
          rel="noreferrer"
        >
          <button>Program zápasů</button>
        </a>
        <div className={styles.hamburger} onClick={handleMenuClick}>
          <span className={`${styles.burger__bar}`}></span>
          <span className={`${styles.burger__bar}`}></span>
          <span className={`${styles.burger__bar}`}></span>
        </div>
      </div>
    </header>
  )
}

export default Topbar
//TODO - refactor styles so article styles are not in homepage
