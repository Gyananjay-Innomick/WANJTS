import '../styles/globals.css'
import '../styles/main.scss';
import '../styles/custom.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export async function getServerSideProps({ locale }: { locale: string }) {
  return ({
    props: {
      ...(await serverSideTranslations(locale, ['home', 'city'])),
    }
  })
}
export default appWithTranslation(App);