import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import {useEffect} from "react";
import {fetchArticles, fetchArticlesForIndex} from "../data";
import useSwr from 'swr';
import React from 'react';

export default function Home() {

  const {data: articles, mutate} = useSwr('articles', fetchArticlesForIndex);

  
  return (
    <div>
      <div className={styles.container}>

        <div className={styles.section} id="aktuality">
          <h2>Aktuality</h2>

          <div className={styles.articles}>
          
          {articles ? articles.map((article, i) => {
                  return (
                    <Link href={`/articles/${article.id}`}>
                          
                       
                      <div
                          key={article.title}
                          className={`${styles.articles__article}`}
                      >
                          <h3>{article.title}</h3>
                          <p>{new Date(article.publishedTimeStamp).toLocaleDateString()}</p>
                          <p>{article.subtitle}</p>
                          
    
                      </div>
                      </Link>
                  )
              }) : <div>loading articles</div>}
            
          </div>
          
          
        </div>

          {/* <div className={styles.articles__button}>
          <a href="#" className={styles.articles__link}>
            VŠECHNY ČLÁNKY
          </a>
          </div> */}


          <div className={`${styles.buttons} ${styles.section}`}>
          <a href="https://souteze.fotbal.cz/turnaje/hlavni/bbcd5c4b-ef68-4f1f-ab1a-881c1e9a303c" className={styles.buttons__link} target="_blank">
            Pohár OFS - rozlosování a výsledky
          </a>
          <a href="https://is.fotbal.cz/souteze/detail-souteze.aspx?req=9767b870-a9eb-4444-bec0-01acaae098c9" className={styles.buttons__link} target="_blank">
            OKRESNÍ PŘEBOR - rozlosování a výsledky
          </a>
          <a href="https://is.fotbal.cz/souteze/tabulky-souteze.aspx?req=9767b870-a9eb-4444-bec0-01acaae098c9" className={styles.buttons__link} target="_blank">
            OKRESNÍ PŘEBOR - tabulka
          </a>
          </div>
        
 

      <div className={`${styles.sponsors} ${styles.section}`} id="sponzori">
        <h2>Sponzoři</h2>
        <div className={styles.sponsors__items}>
          <a href='https://www.novedvory.cz/' target="_blank">
            <img src='nove_dvory.png' alt=''  />
          </a>
          <a href='https://www.kr-stredocesky.cz/' target="_blank">
            <img src='stredocesky_kraj.gif' alt=''  />
          </a>
          
        </div>
      </div>

      <div className={`${styles.club} ${styles.section}`} id="klub">
        <h2>Klub</h2>
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
            <img className={styles.logo__img}  src="logo.png" alt="logo-nove-dvory" />
          </a>
          <ul className={styles.nav_links_footer}>
                <li><a href="#aktuality">Aktuality</a></li>
                <li><a href="#sponzori">Sponzoři</a></li>
                <li><a href="#klub">Klub</a></li>
                {/* <li><a href="#hriste">Hřiště</a></li> */}
                {/* <li><a href="#historie">Historie</a></li> */}
          </ul>
          <h4>© 2023 Fotbalový klub SK 1933 ČUS Nové Dvory</h4>
        </div>
      </footer>
      
            
    </div>
    
  );
    
  
}
