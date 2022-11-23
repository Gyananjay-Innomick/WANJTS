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
                <span>New Delhi</span>
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
                <span>Mumbai</span>
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
                <span>Kolkata</span>
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
                <span>Hyderabad</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
