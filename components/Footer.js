import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10">
      <aside>
        <Image
          src="/logo.svg"
          width="150px"
          height="150px"
          alt="logo-nove-dvory"
        />
        <p className="font-bold">
          FK Ener Nové Dvory
          <br />
          Hrajem fotbal
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
