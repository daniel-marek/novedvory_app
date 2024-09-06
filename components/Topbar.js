import { useState, useCallback } from 'react'

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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Image
          src="/logo.svg"
          width="150px"
          height="150px"
          alt="logo-nove-dvory"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl">
          <li>
            <a>Aktuality</a>
          </li>
          <li>
            <a>Sponzoři</a>
          </li>
          <li>
            <a>Klub</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn"
          href="http://www.fotbal.cz.esports-7a-fotbal.superhosting.cz/souteze/turnaje/hlavni/b12390c4-ff94-4366-8c79-91de7521c42d"
          target="_blank"
        >
          Program zápasů
        </a>
      </div>
    </div>
  )
}

export default Topbar
