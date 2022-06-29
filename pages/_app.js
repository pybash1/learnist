import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Learnist</title>
        <link rel="icon" href="/favicon.svg" />
        <meta charset='UTF-8' />
        <meta name='keywords' content="school,studies,class,homework" />
        <meta name='description' content="Learnist - One place to ace all of your studies!" />
        <meta name='subject' content="Studies" />
        <meta name='copyright' content="Learnist" />
        <meta name='subtitle' content="Learnist - Ace your studies" />
        <meta name='og:title' content='Learnist - Ace your studies' />
        <meta name='og:type' content='studies' />
        <meta name='og:url' content='http://learnist.vercel.app' />
        <meta name='og:image' content='/favicon.svg' />
        <meta name='og:site_name' content='Learnist' />
        <meta name='og:description' content='Learnist is an all in one platform for studnests as well as teachers to study.' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
