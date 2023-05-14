import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { fetchArticlesForIndex } from '../data'
import useSwr from 'swr'
import React from 'react'

export default function Home() {
  const { data: articles } = useSwr('articles', fetchArticlesForIndex)

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.section} id="aktuality">
          <h2>Aktuality</h2>

          <div className={styles.articles}>
            {articles ? (
              articles.map((article, i) => {
                return (
                  <Link key={i} href={`/articles/${article.id}`}>
                    <div
                      key={article.title}
                      className={`${styles.articles__article}`}
                    >
                      <h3>{article.title}</h3>
                      <p>
                        {new Date(
                          article.publishedTimeStamp,
                        ).toLocaleDateString()}
                      </p>
                      <p>{article.subtitle}</p>
                      <p className={styles.articles__read}>Čti více</p>
                    </div>
                  </Link>
                )
              })
            ) : (
              <img className={styles.articles__load} src="ring.svg" />
            )}
          </div>
        </div>

        {/* <div className={styles.articles__button}>
          <a href="#" className={styles.articles__link}>
            VŠECHNY ČLÁNKY
          </a>
          </div> */}

        <div className={`${styles.buttons} ${styles.section}`}>
          <a
            href="https://souteze.fotbal.cz/turnaje/hlavni/bbcd5c4b-ef68-4f1f-ab1a-881c1e9a303c"
            className={styles.buttons__link}
            target="_blank"
            rel="noreferrer"
          >
            Pohár OFS - rozlosování a výsledky
          </a>
          <a
            href="https://is.fotbal.cz/souteze/detail-souteze.aspx?req=9767b870-a9eb-4444-bec0-01acaae098c9"
            className={styles.buttons__link}
            target="_blank"
            rel="noreferrer"
          >
            OKRESNÍ PŘEBOR - rozlosování a výsledky
          </a>
          <a
            href="https://is.fotbal.cz/souteze/tabulky-souteze.aspx?req=9767b870-a9eb-4444-bec0-01acaae098c9"
            className={styles.buttons__link}
            target="_blank"
            rel="noreferrer"
          >
            OKRESNÍ PŘEBOR - tabulka
          </a>
        </div>

        <div className={`${styles.sponsors} ${styles.section}`} id="sponzori">
          <h2>Sponzoři</h2>
          <div className={styles.sponsors__items}>
            <a
              href="https://www.novedvory.cz/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="nove_dvory.png" alt="" />
            </a>
            <a
              href="https://www.kr-stredocesky.cz/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="stredocesky_kraj.gif" alt="" />
            </a>
          </div>
        </div>

        <div className={`${styles.club} ${styles.section}`} id="klub">
          <h2>Klub</h2>
          <div className={styles.club__container}>
            <div className={styles.club__table}>
              <table>
                <tbody>
                  <tr>
                    <td>Název klubu:</td>
                    <td>SK 1933 ČUS Nové Dvory, z.s.</td>
                  </tr>
                  <tr>
                    <td>Adresa:</td>
                    <td>Havlíčkova 258, 285 31 Nové Dvory</td>
                  </tr>
                  <tr>
                    <td>Předseda klubu:</td>
                    <td>ČUS Nové Dvory</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>ČUS Nové Dvory</td>
                  </tr>
                  <tr>
                    <td>IČO:</td>
                    <td>18620833</td>
                  </tr>
                  <tr>
                    <td>Bankovní spojení:</td>
                    <td>ČUS Nové Dvory</td>
                  </tr>
                  <tr>
                    <td>Klubové barvy:</td>
                    <td>modrá, žlutá</td>
                  </tr>
                  <tr>
                    <td>Rok založení:</td>
                    <td>1933</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <iframe
              className={styles.club__map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.4134936750306!2d15.330409047466176!3d49.96610366600859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c40cf1704baff%3A0x1592340b37ecdd90!2zSGF2bMOtxI1rb3ZhIDI1OCwgMjg1IDMxIE5vdsOpIER2b3J5!5e0!3m2!1scs!2scz!4v1677062729459!5m2!1scs!2scz"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
        {/* <div className={`${styles.field} ${styles.section}`} id="hriste">
        <h2>Hřiště</h2>
      </div> */}
        {/* <div className={`${styles.history} ${styles.section}`} id="historie">
        <h2>Historie</h2>
      </div> */}
      </div>

      <footer className={styles.footer}>
        <div className={styles.footer__items}>
          <a href="#">
            <img
              className={styles.logo__img}
              src="logo.png"
              alt="logo-nove-dvory"
            />
          </a>
          <ul className={styles.nav_links_footer}>
            <li>
              <a href="#aktuality">Aktuality</a>
            </li>
            <li>
              <a href="#sponzori">Sponzoři</a>
            </li>
            <li>
              <a href="#klub">Klub</a>
            </li>
            {/* <li><a href="#hriste">Hřiště</a></li> */}
            {/* <li><a href="#historie">Historie</a></li> */}
          </ul>
          <h4>© 2023 Fotbalový klub SK 1933 ČUS Nové Dvory</h4>
        </div>
      </footer>
    </div>
  )
}
