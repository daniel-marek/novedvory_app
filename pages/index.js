import Link from 'next/link'
import { fetchArticlesForIndex } from '../data'
import useSwr from 'swr'
import React from 'react'
import Image from 'next/image'
import Footer from '../components/Footer'

const SPONSORS = [
  {
    href: 'https://www.enerdomy.cz/enerdomy',
    imgSrc: 'enerdomylogo.svg',
  },
  {
    href: 'https://www.novedvory.cz/',
    imgSrc: 'mestyslogo.png',
  },
  {
    href: 'https://www.kr-stredocesky.cz/',
    imgSrc: 'stredocesky_kraj.gif',
  },
  {
    href: 'https://www.ave.cz/',
    imgSrc: 'avelogo.svg',
  },
  {
    href: 'https://girafruit.cz/',
    imgSrc: 'giralogo.png',
  },
]

export default function Home() {
  const { data: articles } = useSwr('articles', fetchArticlesForIndex)

  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-6">Rozcestník</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
          <a
            href="https://souteze.fotbal.cz/turnaje/hlavni/bbcd5c4b-ef68-4f1f-ab1a-881c1e9a303c"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            target="_blank"
            rel="noreferrer"
          >
            Pohár OFS - rozlosování a výsledky
          </a>
          <a
            href="https://is.fotbal.cz/souteze/detail-souteze.aspx?req=9767b870-a9eb-4444-bec0-01acaae098c9"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            target="_blank"
            rel="noreferrer"
          >
            OKRESNÍ PŘEBOR - rozlosování a výsledky
          </a>
          <a
            href="https://is.fotbal.cz/souteze/tabulky-souteze.aspx?req=9767b870-a9eb-4444-bec0-01acaae098c9"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            target="_blank"
            rel="noreferrer"
          >
            OKRESNÍ PŘEBOR - tabulka
          </a>
        </div>
        <div className="mb-10" id="aktuality">
          <h2 className="text-4xl font-extrabold mb-6">Aktuality</h2>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {articles ? (
              articles.map((article, i) => {
                return (
                  <Link key={i} href={`/articles/${article.id}`}>
                    <div className="card bg-primary text-primary-content w-96">
                      <div className="card-body">
                        <h2 className="card-title">{article.title}</h2>
                        <p>{article.subtitle}</p>
                        <p>
                          {new Date(
                            article.publishedTimeStamp,
                          ).toLocaleDateString()}
                        </p>
                        <div className="card-actions justify-end">
                          <button className="btn uppercase">více</button>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })
            ) : (
              <img className="" src="ring.svg" />
            )}
          </div>
        </div>

        <div className="flex flex-col mb-10" id="sponzori">
          <h2 className="text-4xl font-extrabold mb-6">Sponzoři</h2>
          <div className="flex justify-between bg-accent">
            {SPONSORS.map(({ href, imgSrc }) => (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                key={href}
                className="flex-1 flex flex-col p-8"
              >
                <img
                  src={imgSrc}
                  className="relative top-1/2 -translate-y-1/2"
                  alt=""
                />
              </a>
            ))}
          </div>
        </div>

        <div className="" id="klub">
          <h2 className="text-4xl font-extrabold mb-6">Klub</h2>
          <div className="">
            <div className="">
              <table className="table table-zebra">
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
              className="w-full min-h-[400px] my-3"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.4134936750306!2d15.330409047466176!3d49.96610366600859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c40cf1704baff%3A0x1592340b37ecdd90!2zSGF2bMOtxI1rb3ZhIDI1OCwgMjg1IDMxIE5vdsOpIER2b3J5!5e0!3m2!1scs!2scz!4v1677062729459!5m2!1scs!2scz"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
