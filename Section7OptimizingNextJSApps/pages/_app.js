import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
