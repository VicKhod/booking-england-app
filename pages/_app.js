import '../styles/globals.scss';
import Header from "../components/Header";
import Form from '../components/Form';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Header/>
    <Component {...pageProps} />
    <Form/>
  </>
);

export default MyApp;