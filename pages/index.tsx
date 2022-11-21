import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link'
import { useRouter } from 'next/router';
import SearchBox from '../Components/SearchBox'
import enUS from "../Translations/en.json";
import fr from "../Translations/fr.json";


export default function Home() {
  const router = useRouter();
  const { locale } = router;

  let t = enUS;
  switch (locale) {
    case "en-GB":
      t = enUS
      break;
    case "fr":
      t = fr
      break;
  }
  return (
    <div>
      <Head>
        <title>{t.home.title}</title>
      </Head>
      <div className="home">

        <div className="container">
          <h1 style={{ textAlign: "center" }}>{t.home.heading}</h1>
          <SearchBox placeholder="search for a city.." />
          <div className='places'>
            <div className='places_row'>
              <div className='places_box'>
                <Link href={'location/new-york-5128638'}>
                  <div className='places_image-wrapper'>
                    <Image
                      src={`/new-york.jpg`}
                      alt="new-york"
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
                <span>{t.home.new_york}</span>
              </div>
              <div className='places_box'>
                <Link href={'location/london-2643743'}>
                  <div className='places_image-wrapper'>
                    <Image
                      src={`/london.jpg`}
                      alt="london"
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
                <span>{t.home.london}</span>
              </div>
              <div className='places_box'>
                <Link href={'location/tokyo-1850147'}>
                  <div className='places_image-wrapper'>
                    <Image
                      src={`/tokyo.jpg`}
                      alt="tokyo"
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
                <span>{t.home.tokyo}</span>
              </div>
              <div className='places_box'>
                <Link href={'location/paris-2968815'}>
                  <div className='places_image-wrapper'>
                    <Image
                      src={`/paris.jpg`}
                      alt="paris"
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
                <span>{t.home.paris}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
