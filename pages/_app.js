import '../styles/globals.scss';
import Header from "../components/Header";
import Form from '../components/Form';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Form/>
  </>
);

export default MyApp;