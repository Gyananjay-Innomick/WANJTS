import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link'
import SearchBox from '../Components/SearchBox'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../Components/Header';


export default function Home() {

  const { t } = useTranslation('home')

  return (
    <div>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <div className="home">
        <Header />
        <div className='home_content'>
          <div className="container">
            <SearchBox placeholder="search for a city.." />
            <div className='places'>
              <div className='places_row'>
                <div className='places_box'>
                  <Link href={'location/new-delhi-1261481'}>
                    <div className='places_image-wrapper'>
                      <Image
                        src={`/new-delhi.jpg`}
                        alt="new-delhi"
                        height='380'
                        width='280'
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }} />
                    </div>
                  </Link>
                  <span>{t('new_delhi')}</span>
                </div>
                <div className='places_box'>
                  <Link href={'location/mumbai-1275339'}>
                    <div className='places_image-wrapper'>
                      <Image
                        src={`/mumbai.jpg`}
                        alt="mumbai"
                        height='380'
                        width='280'
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }} />
                    </div>
                  </Link>
                  <span> {t('mumbai')} </span>
                </div>
                <div className='places_box'>
                  <Link href={'location/kolkata-1275004'}>
                    <div className='places_image-wrapper'>
                      <Image
                        src={`/kolkata.jpg`}
                        alt="kolkata"
                        height='380'
                        width='280'
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }} />
                    </div>
                  </Link>
                  <span> {t('kolkata')} </span>
                </div>
                <div className='places_box'>
                  <Link href={'location/hyderabad-1269843'}>
                    <div className='places_image-wrapper'>
                      <Image
                        src={`/hyderabad.jpg`}
                        alt="hyderabad"
                        height='380'
                        width='280'
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }} />
                    </div>
                  </Link>
                  <span>{t('hyderabad')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return ({
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    }
  })
}