import Header from '../../components/Header'
import '../../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
      <>
        <Head>
          <title>Pedro | dev</title>
        </Head>
        <Header /> 
        <Component {...pageProps} />
      </>
    )
}