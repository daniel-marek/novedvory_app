import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'



export default function Home() {
  return (
    <div>
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
        </div>
      </header>

      
      
      <div className={styles.container}>
          <div className={styles.articles}>
            <div className={`${styles.articles__article} ${styles["articles__article--big"]}`} style={{'--url': 'url(https://picsum.photos/320/240)'}}>
              <div className={styles.articles__article__big}>
                <h4>Kategorie článku!</h4>
                <h3>Titulek článku!</h3>
                </div>
              </div>
            <div className={`${styles.articles__article} ${styles["articles__article--small"]}`}  style={{'--url': 'url(https://picsum.photos/320/240)'}}>
              <div className={styles.articles__article__big}>
                <h4>Kategorie článku!</h4>
                <h3>Titulek článku!</h3>
                </div>
              </div>
            <div className={`${styles.articles__article} ${styles["articles__article--small"]}`}  style={{'--url': 'url(https://picsum.photos/320/240)'}}>
              <div className={styles.articles__article__small}>
                <h4>Kategorie článku!</h4>
                <h3>Titulek článku!</h3>
                </div>
              </div>
        </div>
        

          <div className={styles.buttons}>
        <a href="#" className={styles.buttons__link}>
          Pohár OFS - rozlosování a výsledky
        </a>
        <a href="#" className={styles.buttons__link}>
          OKRESNÍ PŘEBOR - rozlosování a výsledky
        </a>
        <a href="#" className={styles.buttons__link}>
          OKRESNÍ PŘEBOR - tabulka
        </a>
      </div>

      <div className={styles.news}>
        <h2>Další zprávy</h2>
          <div className={styles.news__items}>
              <div>
                  <img src='clanek_1.jpg' alt='clanek 1' />
              </div>
              <div>
                  <img src='clanek_1.jpg' alt='clanek 2' />
              </div>
              <div>
                  <img src='clanek_1.jpg' alt='clanek 3' />
              </div>
          </div>



      </div>

      <div className={styles.sponsors}>
        <h2>Sponzoři</h2>
        <div className={styles.sponsors__items}>
          <div>
            <img src='nove_dvory.png' alt=''  />
          </div>
          <div>
            <img src='stredocesky_kraj.gif' alt=''  />
          </div>
          
        </div>
      </div>

    </div>

      <footer className={styles.footer}>
        <div className={styles.footer__items}>
          <a href="#">
            <img className={styles.logo__img}  src="logo.png" alt="logo-nove-dvory" />
          </a>
          <ul className={styles.nav_links_footer}>
              <li><a href="#">Aktuality</a></li>
              <li><a href="#">Muži A</a></li>
              <li><a href="#">Hřiště</a></li>
              <li><a href="#">Sponzoři</a></li>
              <li><a href="#">Historie</a></li>
              <li><a href="#">Klub</a></li>
          </ul>
          <h4>© 2022 Fotbalový klub SK 1933 ČUS Nové Dvory</h4>
        </div>
      </footer>
      
            
    </div>
    
  );
  
}
/*
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} ${styles.nadpis}`}>
          Welcome to <a href="https://nextjs.org">1934 SK CUS Nove Dvory</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
*/