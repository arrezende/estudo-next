import '../styles/globals.css'
import '../styles/bootstrap.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(
    <Component {...pageProps}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </Component>

    )
}

export default MyApp
