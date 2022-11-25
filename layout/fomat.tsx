import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function format({ children }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}